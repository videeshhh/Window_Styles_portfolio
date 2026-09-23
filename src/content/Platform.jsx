import React, { useEffect, useState } from "react";
import "./styles/Platform.css";

function GitHubCard({ username }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;

    script.onload = () => {
      if (window.GitHubCalendar) {
        window.GitHubCalendar(".github-calendar", username, {
          responsive: true,
          global_stats: false,
          tooltips: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, [username]);

  return (
    <div className="platform-card github-card">
      <div className="github-calendar">
        Loading GitHub contributions...
      </div>
    </div>
  );
}

function LeetCodeCard({ username }) {
  const [stats, setStats] = useState(null);
  const [calendar, setCalendar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }

        const data = await response.json();
        setStats(data);
        
        if (data.submissionCalendar) {
          setCalendar(data.submissionCalendar);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <div className="platform-card leetcode-card">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="platform-card leetcode-card">
        <p>Unable to load data.</p>
      </div>
    );
  }

  const easyPct = (stats.easySolved / (stats.totalEasy || 1)) * 100;
  const medPct = (stats.mediumSolved / (stats.totalMedium || 1)) * 100;
  const hardPct = (stats.hardSolved / (stats.totalHard || 1)) * 100;
  const totalPct = (stats.totalSolved / (stats.totalQuestions || 1)) * 100;

  const weeks = Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 4)));

  return (
    <div className="platform-card leetcode-card">
      <div className="lc-header">
        <div className="lc-logo-wrap">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffa116">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.497 2.337-1.497 3.834s.516 2.852 1.497 3.835l10.1 10.101c.515.515 1.366.498 1.901-.038.536-.535.553-1.387.038-1.902l-2.467-2.503a5.055 5.055 0 0 0 2.445-1.336l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.038z"/>
          </svg>
          <span className="lc-username">{username}</span>
        </div>
        <span className="lc-rank">#{stats.ranking}</span>
      </div>

      <div className="lc-body">
        <div className="lc-ring-container">
          <div 
            className="lc-ring" 
            style={{background: `conic-gradient(#ffa116 ${totalPct}%, #333 0)`}}
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
              <span>{stats.easySolved} / {stats.totalEasy || 400}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill easy" style={{ width: `${easyPct}%` }}></div>
            </div>
          </div>
          <div className="lc-bar-item">
            <div className="lc-bar-header">
              <span>Medium</span>
              <span>{stats.mediumSolved} / {stats.totalMedium || 800}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill medium" style={{ width: `${medPct}%` }}></div>
            </div>
          </div>
          <div className="lc-bar-item">
            <div className="lc-bar-header">
              <span>Hard</span>
              <span>{stats.hardSolved} / {stats.totalHard || 200}</span>
            </div>
            <div className="lc-bar-track">
              <div className="lc-bar-fill hard" style={{ width: `${hardPct}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lc-heatmap-section">
        <h3>Heatmap (Last 52 Weeks)</h3>
        <div className="lc-heatmap-grid">
          {weeks.map((week, i) => (
            <div key={i} className="lc-heatmap-col">
              {week.map((day, j) => (
                <div key={j} className={`lc-cell level-${day}`}></div>
              ))}
            </div>
          ))}
        </div>
        <div className="lc-heatmap-footer">
          <span>2025.9.24</span>
          <span>2026.9.23</span>
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <div className="platform">
      <div className="platform-cards">
        <GitHubCard username="videeshhh" />
        <LeetCodeCard username="videeshhh" />
      </div>
    </div>
  );
}