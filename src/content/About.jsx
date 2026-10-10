import React from "react";
import "./styles/About_style.css";
import profileImage from "../assets/profile.jpeg";


export default function About() {
  return (
    <>
      <main className="hero-section">
        <div className="hero-left">
          <p className="greeting">Hey. I'm a developer,</p>

          <h1 className="main-title">
            BUILDING
            <br />
             THINGS
            <br />
            FOR THE WORLD
          </h1>

          <p className="description">
            I'm someone who enjoys building things that solve real problems. I
            like turning ideas into working applications, whether it's a
            full-stack web project, an AI-powered solution, or a simple tool
            that makes life easier. What keeps me motivated is learning
            something new and applying it to create meaningful experiences.
          </p>

          <a href="https://drive.google.com/file/d/1eCkaqVockrDKHoB5IDEymnUwCD-2xrdp/view?usp=sharing" className="cta-button">
            DOWNLOAD RESUME <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-center">
             <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
            />
        </div>

        <div className="hero-right">
          <div className="stat-block">
            <h3>Full-Stack</h3>
            <p>Web Development</p>
          </div>

          <div className="stat-block">
            <h3>AI Integration</h3>
            <p>Powered Solutions</p>
          </div>

          <div className="stat-block">
            <h3>Problem</h3>
            <p>Solving & Logic</p>
          </div>

          <div className="stat-block">
            <h3>Always</h3>
            <p>Learning & Adapting</p>
          </div>
        </div>
      </main>

      <section className="skills-banner">
        <div className="skill-item">
          <h4>IDEA TO REALITY</h4>
          <p>
            Turning complex concepts into functional, working applications.
          </p>
        </div>

        <div className="skill-item">
          <h4>MEANINGFUL UI/UX</h4>
          <p>Focusing on user experiences that make daily life easier.</p>
        </div>

        <div className="skill-item">
          <h4>SCALABLE SYSTEMS</h4>
          <p>Building reliable backends and smooth frontends for the web.</p>
        </div>

        <div className="skill-item">
          <h4>AI & INNOVATION</h4>
          <p>Leveraging new technologies to build smarter tools.</p>
        </div>
      </section>

      <section className="skills-banner">

        <div className="skill-set-items">
          <h4>LANGUAGES</h4>
          <p>JavaScript</p>
          <p>C++</p>
          <p>Python</p>
        </div>

        <div className="skill-set-items">
          <h4>FRONTEND</h4>
          <p>React</p>
          <p>Framer Motion</p>
          <p>Material UI</p>
        </div>

        <div className="skill-set-items">
          <h4>BACKEND</h4>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>FastAPI</p>
        </div>

        <div className="skill-set-items">
          <h4>DATABASE</h4>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
        </div>
      </section>
    </>
  );
}
