import React, { useEffect, useState } from "react";
import "./styles/Platform.css";

//github
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
        window.GitHubCalendar(
          ".github-calendar",
          username,
          { responsive: true }
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, [username]);

  return (
    <div className="platform-card">
      <h2>GitHub</h2>

      <p>@{username}</p>

      <div className="github-calendar">
        Loading GitHub contributions...
      </div>
    </div>
  );
}
//leetcode card 
function LeetCodeCard({ username }) {
  const [stats, setStats] = useState(null);
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

        if (data.status === "error") {
          throw new Error(data.message || "User not found");
        }

        setStats(data);
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
      <div className="platform-card">
        <h2>LeetCode</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="platform-card">
        <h2>LeetCode</h2>
        <p>Unable to load LeetCode data.</p>
      </div>
    );
  }

  return (
    <div className="platform-card">
      <h2>LeetCode</h2>

      <p>@{username}</p>

      <div>
        <strong>{stats.totalSolved}</strong>
        <span> / {stats.totalQuestions} Solved</span>
      </div>

      <div>
        <p>Easy: {stats.easySolved}</p>
        <p>Medium: {stats.mediumSolved}</p>
        <p>Hard: {stats.hardSolved}</p>
      </div>

      <p>
        Ranking: {stats.ranking}
      </p>

      <p>
        Acceptance Rate: {stats.acceptanceRate}%
      </p>
    </div>
  );
}



export default function Platform() {
  return (
    <div className="platform">

      <h1>My Programming Platforms</h1>

      <div className="platform-cards">

        <GitHubCard username="videeshhh" />

        <LeetCodeCard username="videeshhh" />

      </div>

    </div>
  );
}