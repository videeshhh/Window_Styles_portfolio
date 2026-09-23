import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./styles/Platform.css";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function toDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function formatDateLabel(dateKey) {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function buildWeeks(dataByDate, { daysBack = 364 } = {}) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const rangeStart = new Date(today.getTime() - daysBack * MS_PER_DAY);
  const start = new Date(rangeStart.getTime() - rangeStart.getUTCDay() * MS_PER_DAY);

  const days = [];
  for (let t = start.getTime(); t <= today.getTime(); t += MS_PER_DAY) {
    const key = toDateKey(new Date(t));
    const entry = dataByDate.get(key);
    days.push({
      date: key,
      count: entry ? entry.count : 0,
      level: entry ? entry.level : 0,
    });
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function getMonthLabels(weeks) {
  const labels = [];

  weeks.forEach((week, colIndex) => {
    const firstOfMonth = week.find((day) => day && day.date.endsWith("-01"));
    if (firstOfMonth) {
      const month = Number(firstOfMonth.date.slice(5, 7)) - 1;
      labels.push({ colIndex, label: MONTH_NAMES[month] });
    }
  });

  const firstDay = weeks[0] && weeks[0].find(Boolean);
  if (firstDay && (!labels.length || labels[0].colIndex !== 0)) {
    const month = Number(firstDay.date.slice(5, 7)) - 1;
    labels.unshift({ colIndex: 0, label: MONTH_NAMES[month] });
  }

  return labels;
}

function clampPercent(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

function useFetchJSON(url) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!url) {
      setStatus("error");
      setError("No username provided.");
      return undefined;
    }

    let active = true;
    const controller = new AbortController();
    setStatus("loading");
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }
        return response.json();
      })
      .then((json) => {
        if (!active) return;
        setData(json);
        setStatus("success");
      })
      .catch((err) => {
        if (!active || err.name === "AbortError") return;
        setError(err.message || "Something went wrong.");
        setStatus("error");
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [url, retryCount]);

  const retry = useCallback(() => setRetryCount((count) => count + 1), []);

  return { data, status, error, retry };
}

function ContributionCalendar({ weeks, monthLabels, cellTitle }) {
  return (
    <div className="contribution-calendar">
      <div className="cc-scroll">
        <div className="cc-months">
          {monthLabels.map(({ colIndex, label }) => (
            <span key={`${label}-${colIndex}`} style={{ gridColumnStart: colIndex + 1 }}>
              {label}
            </span>
          ))}
        </div>
        <div className="cc-body">
          <div className="cc-weekday-labels" aria-hidden="true">
            <span />
            <span>Mon</span>
            <span />
            <span>Wed</span>
            <span />
            <span>Fri</span>
            <span />
          </div>
          <div className="cc-weeks">
            {weeks.map((week, weekIndex) => (
              <div className="cc-week" key={weekIndex}>
                {week.map((day, dayIndex) =>
                  day ? (
                    <div
                      key={dayIndex}
                      className={`cc-cell level-${day.level}`}
                      title={cellTitle(day)}
                    />
                  ) : (
                    <div key={dayIndex} className="cc-cell cc-empty" aria-hidden="true" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cc-legend">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className={`cc-cell level-${level}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

function CalendarSkeleton({ withHeader = false }) {
  return (
    <div className="skeleton-wrap" aria-hidden="true">
      {withHeader && (
        <>
          <div className="skeleton skeleton-header" />
          <div className="skeleton skeleton-ring" />
        </>
      )}
      <div className="skeleton skeleton-bar" />
      <div className="skeleton skeleton-grid" />
    </div>
  );
}

function CardError({ message, username, onRetry }) {
  return (
    <div className="card-error">
      <p>
        Couldn&apos;t load data{username ? ` for @${username}` : ""}.
        {message ? ` ${message}` : ""}
      </p>
      {onRetry && (
        <button type="button" className="retry-button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

const GITHUB_CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

function GitHubCard({ username = "" }) {
  const url = username
    ? `${GITHUB_CONTRIBUTIONS_API}/${encodeURIComponent(username)}?y=last`
    : null;
  const { data, status, error, retry } = useFetchJSON(url);

  const { weeks, monthLabels, total } = useMemo(() => {
    if (!data || !Array.isArray(data.contributions)) {
      return { weeks: [], monthLabels: [], total: 0 };
    }
    const byDate = new Map(data.contributions.map((day) => [day.date, day]));
    const builtWeeks = buildWeeks(byDate);
    return {
      weeks: builtWeeks,
      monthLabels: getMonthLabels(builtWeeks),
      total: data.contributions.reduce((sum, day) => sum + day.count, 0),
    };
  }, [data]);

  return (
    <div className="platform-card github-card">
      <div className="gh-header">
        <img
          className="gh-avatar"
          src={`https://github.com/${username}.png?size=64`}
          alt=""
          width="32"
          height="32"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
        <div className="gh-heading">
          <a
            className="gh-username"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
              />
            </svg>
            {username}
          </a>
          {status === "success" && (
            <span className="gh-total">
              {total.toLocaleString()} contributions in the last year
            </span>
          )}
        </div>
      </div>

      {status === "loading" && <CalendarSkeleton />}
      {status === "error" && <CardError message={error} username={username} onRetry={retry} />}
      {status === "success" && (
        <ContributionCalendar
          weeks={weeks}
          monthLabels={monthLabels}
          cellTitle={(day) =>
            `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDateLabel(day.date)}`
          }
        />
      )}
    </div>
  );
}

const LEETCODE_API = "https://leetcode-api-faisalshohag.vercel.app";

function levelForSubmissions(count) {
  if (!count) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

function buildLeetCodeWeeks(submissionCalendar) {
  const byDate = new Map();
  Object.entries(submissionCalendar || {}).forEach(([timestamp, count]) => {
    const key = toDateKey(new Date(Number(timestamp) * 1000));
    const existing = byDate.get(key);
    const total = (existing ? existing.count : 0) + count;
    byDate.set(key, { date: key, count: total, level: levelForSubmissions(total) });
  });
  return buildWeeks(byDate);
}

function LeetCodeCard({ username = "" }) {
  const url = username ? `${LEETCODE_API}/${encodeURIComponent(username)}` : null;
  const { data: stats, status, error, retry } = useFetchJSON(url);

  const { weeks, monthLabels, totalSubmissions } = useMemo(() => {
    if (!stats || !stats.submissionCalendar) {
      return { weeks: [], monthLabels: [], totalSubmissions: 0 };
    }
    const builtWeeks = buildLeetCodeWeeks(stats.submissionCalendar);
    return {
      weeks: builtWeeks,
      monthLabels: getMonthLabels(builtWeeks),
      totalSubmissions: Object.values(stats.submissionCalendar).reduce((a, b) => a + b, 0),
    };
  }, [stats]);

  if (status === "loading") {
    return (
      <div className="platform-card leetcode-card">
        <CalendarSkeleton withHeader />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="platform-card leetcode-card">
        <CardError message={error} username={username} onRetry={retry} />
      </div>
    );
  }

  const totalPct = clampPercent((stats.totalSolved / (stats.totalQuestions || 1)) * 100);
  const easyPct = clampPercent((stats.easySolved / (stats.totalEasy || 1)) * 100);
  const medPct = clampPercent((stats.mediumSolved / (stats.totalMedium || 1)) * 100);
  const hardPct = clampPercent((stats.hardSolved / (stats.totalHard || 1)) * 100);

  return (
    <div className="platform-card leetcode-card">
      <div className="lc-header">
        <div className="lc-logo-wrap">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffa116" aria-hidden="true">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.497 2.337-1.497 3.834s.516 2.852 1.497 3.835l10.1 10.101c.515.515 1.366.498 1.901-.038.536-.535.553-1.387.038-1.902l-2.467-2.503a5.055 5.055 0 0 0 2.445-1.336l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.038z" />
          </svg>
          <a
            className="lc-username"
            href={`https://leetcode.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            {username}
          </a>
        </div>
        <span className="lc-rank">
          {typeof stats.ranking === "number" ? `#${stats.ranking.toLocaleString()}` : "—"}
        </span>
      </div>

      <div className="lc-body">
        <div className="lc-ring-container">
          <div
            className="lc-ring"
            style={{ background: `conic-gradient(#ffa116 ${totalPct}%, #333 0)` }}
          >
            <div className="lc-ring-inner">
              <span className="lc-total">{stats.totalSolved}</span>
            </div>
          </div>
        </div>

        <div className="lc-bars">
          <div className="lc-bar-item">
            <div className="lc-bar-header">
              <span>Easy</span>
              <span>{stats.easySolved} / {stats.totalEasy}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill easy" style={{ width: `${easyPct}%` }} />
            </div>
          </div>
          <div className="lc-bar-item">
            <div className="lc-bar-header">
              <span>Medium</span>
              <span>{stats.mediumSolved} / {stats.totalMedium}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill medium" style={{ width: `${medPct}%` }} />
            </div>
          </div>
          <div className="lc-bar-item">
            <div className="lc-bar-header">
              <span>Hard</span>
              <span>{stats.hardSolved} / {stats.totalHard}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill hard" style={{ width: `${hardPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="lc-heatmap-section">
        <h3>{totalSubmissions.toLocaleString()} submissions in the last year</h3>
        <ContributionCalendar
          weeks={weeks}
          monthLabels={monthLabels}
          cellTitle={(day) =>
            `${day.count} submission${day.count === 1 ? "" : "s"} on ${formatDateLabel(day.date)}`
          }
        />
      </div>
    </div>
  );
}

export default function Platform({
  githubUsername = "videeshhh",
  leetcodeUsername = "videeshhh",
}) {
  return (
    <div className="platform">
      <div className="platform-cards">
        <GitHubCard username={githubUsername} />
        <LeetCodeCard username={leetcodeUsername} />
      </div>
    </div>
  );
}