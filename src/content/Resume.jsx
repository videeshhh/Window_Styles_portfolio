import React from "react";

const Resume = () => {
  return (
    <div className="resume">

      {/* Header */}
      <div className="header">

        <div className="header-left">
            <h1>Videesh Sharma</h1>
            <p>ERP - 24210101673</p>
            <p>B.Tech - Computer Science Engineering</p>
            <p>Uttaranchal University, Dehradun</p>
        </div>

        <div className="header-right">
            <p>+91-7088526266</p>
            <p>videeshsharma@gmail.com</p>
            <p>Videshhh/GitHub — Portfolio</p>
            <p>linkedin.com/in/videesh-sharma</p>
        </div>

      </div>

      {/* Education */}
      <h2>EDUCATION</h2>

      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institute/Board</th>
            <th>CGPA/Percentage</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bachelor of Technology</td>
            <td>Uttaranchal University, Dehradun</td>
            <td>8.15/10 (Current)</td>
            <td>2024-Present</td>
          </tr>
        </tbody>
      </table>

      {/* Technical Skills */}
      <h2>TECHNICAL SKILLS</h2>

      <ul className="skills-list">
        <li>
          <strong>Machine Learning / Data Science:</strong>{" "}
          Scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, Plotly
        </li>

        <li>
          <strong>AI / LLM Integration:</strong>{" "}
          OpenAI API, Prompt Engineering, Generative AI tools, NLP,
          LLM-powered application development, Hugging Face
        </li>

        <li>
          <strong>Languages:</strong>{" "}
          Python, JavaScript, C/C++, SQL
        </li>

        <li>
          <strong>Web & API Development:</strong>{" "}
          Flask, FastAPI, REST APIs, Express, Node.js, HTML5, CSS,
          OAuth, MongoDB
        </li>

        <li>
          <strong>Tools & Platforms:</strong>{" "}
          Git, GitHub, Jupyter Notebook, Google Colab,
          Anaconda Navigator, Linux
        </li>

        <li>
          <strong>Core Fundamentals:</strong>{" "}
          Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)
        </li>
      </ul>

      {/* Projects */}
      <h2>PROJECTS</h2>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Live Code — <a href="#">GitHub</a>
          </div>

          <div className="item-date">
            July 2025
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Developed a collaborative web IDE utilizing React, Node.js,
            and the Monaco Editor.
          </li>

          <li>
            Engineered real-time code synchronization using WebSockets
            and CRDT algorithms.
          </li>

          <li>
            Created interactive visualizations to analyze financial
            patterns and model predictions.
          </li>

          <li>
            Integrated WebRTC for low-latency, peer-to-peer voice collaboration.
          </li>

          <li>
            Implemented Git-like versioning to track coding history
            and restore project snapshots.
          </li>
        </ul>
      </div>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Music Recommendation System using KNN —{" "}
            <a href="#">GitHub</a>
          </div>

          <div className="item-date">
            July 2025
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Developed a KNN-based music recommendation system using
            a Spotify dataset containing over 1 million songs.
          </li>

          <li>
            Cleaned and preprocessed data by handling missing values,
            normalizing audio features, and encoding categorical genre data.
          </li>

          <li>
            Generated similarity-based recommendations by analyzing
            song features and user-selected inputs.
          </li>

          <li>
            Created interactive visualizations to analyze song feature
            patterns and validate model predictions.
          </li>

          <li>
            Built a Flask web interface for real-time song recommendations
            and exposed the system through a REST API.
          </li>

          <li>
            <strong>Technologies:</strong> Scikit-learn, KNN, Pandas,
            NumPy, Flask, HTML5, CSS
          </li>
        </ul>
      </div>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Jagruk Swadesh (SIH) —{" "}
            <a href="#">GitHub</a> — <a href="#">Live Demo</a>
          </div>

          <div className="item-date">
            September 2025
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Built the central API gateway using Node.js, Express,
            and MongoDB to manage client authentication, user sessions,
            and secure reverse-proxy routing.
          </li>

          <li>
            Implemented asynchronous request routing connecting the
            React frontend to a decoupled Python FastAPI AI microservice
            hosting the LangChain RAG pipeline.
          </li>

          <li>
            Designed RESTful endpoints to process multimodal voice/text
            queries, streaming speech-to-text and text-to-speech responses.
          </li>

          <li>
            Handled request payload validation, error propagation,
            and CORS policies for reliable cross-service communication.
          </li>
        </ul>
      </div>

      {/* Leadership */}
      <h2>LEADERSHIP & ACTIVITIES</h2>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Google Student Ambassador
          </div>

          <div className="cert-link">
            <a href="#">View Certificate</a>
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Promoted Gemini AI and Google's latest AI tools within
            student communities.
          </li>

          <li>
            Conducted outreach sessions to introduce students to
            AI-powered image and video creation features.
          </li>

          <li>
            Organized awareness activities and helped students explore
            practical uses of generative AI.
          </li>
        </ul>
      </div>

      {/* Certificates */}
      <h2>CERTIFICATES</h2>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Python Programming Certificate
          </div>

          <div className="item-date">
            June 2025
          </div>
        </div>

        <div className="item-header">
          <div className="item-subtitle">
            Udemy
          </div>

          <div className="cert-link">
            <a href="#">View Certificate</a>
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Comprehensive Python programming course covering fundamentals
            to advanced concepts.
          </li>

          <li>
            <strong>Skills:</strong> Python, OOP, Data Structures,
            File Handling
          </li>
        </ul>
      </div>

      <div className="section-item">
        <div className="item-header">
          <div className="item-title">
            Prompt Engineering & Programming with OpenAI
          </div>

          <div className="item-date">
            July 2024
          </div>
        </div>

        <div className="item-header">
          <div className="item-subtitle">
            Columbia+
          </div>

          <div className="cert-link">
            <a href="#">View Certificate</a>
          </div>
        </div>

        <ul className="bullet-points">
          <li>
            Designed effective prompts using LLM fundamentals and
            zero-shot, one-shot, and few-shot prompting techniques.
          </li>

          <li>
            Built applications using OpenAI API to develop text,
            image, and audio-based features programmatically.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Resume;