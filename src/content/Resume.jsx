import React from 'react';

export default function Resume() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '10px' }}>
      <h1>Videesh Sharma</h1>
      <h2>B.Tech Computer Science and Engineering</h2>
      <p>Roll Number: 84</p>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h3>Technical Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
      
      <h3>Recent Projects</h3>
      <ul>
        <li>Library of Things - Community sharing platform</li>
        <li>Real-time Public Transport Tracker MVP</li>
      </ul>
    </div>
  );
}