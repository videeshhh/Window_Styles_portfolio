export const projectsData = [
  {
    id: 1,
    title: "Live Code",
    date: "July 2025",
    links: [
      { label: "GitHub", url: "https://github.com/videeshhh/LiveCode" }
    ],
    highlights: [
      "Developed a collaborative web IDE utilizing React, Node.js, and the Monaco Editor.",
      "Engineered real-time code synchronization using WebSockets and CRDT algorithms.",
      "Created interactive visualizations to analyze financial patterns and model predictions.",
      "Integrated WebRTC for low-latency, peer-to-peer voice collaboration.",
      "Implemented Git-like versioning to track coding history and restore project snapshots."
    ],
    technologies: ["React", "Node.js", "Monaco Editor", "WebSockets", "WebRTC", "CRDT"]
  },
  {
    id: 2,
    title: "Music Recommendation System",
    date: "July 2025",
    links: [
      { label: "GitHub", url: "https://github.com/videeshhh/Music-recommendation-system-using-spotify-api" }
    ],
    highlights: [
      "Developed a KNN-based music recommendation system using a Spotify dataset containing over 1 million songs, cleaning and preprocessing data by handling missing values, normalizing audio features (tempo, energy, danceability), and encoding categorical genre data.",
      "Generated similarity-based recommendations by analyzing song features and user-selected inputs, validating recommendation quality via [precision@10 / held-out comparison] and achieving [92]% [metric].",
      "Created interactive visualizations to analyze song feature patterns and validate model predictions.",
      "Built a web interface using Flask for real-time song recommendations, exposed through a REST API."
    ],
    technologies: ["Scikit-learn (KNN)", "Pandas", "NumPy", "Flask", "HTML5", "CSS"]
  },
  {
    id: 3,
    title: "Jagruk Swadesh (SIH)",
    date: "September 2025",
    links: [
      { label: "GitHub", url: "https://github.com/Om-roy14/SIH2026_Team_jagruk_swadesh" },
      { label: "Live Demo", url: "https://sih-2026-team-jagruk-swadesh.vercel.app/" }
    ],
    highlights: [
      "Built the central API gateway using Node.js, Express, and MongoDB to manage client authentication, user sessions, and secure reverse-proxy routing.",
      "Implemented asynchronous request routing connecting the React frontend to a decoupled Python FastAPI AI microservice hosting the LangChain RAG pipeline.",
      "Designed RESTful endpoints to process multimodal voice/text queries, streaming speech-to-text (Whisper) and Edge-TTS responses with sub-second latency.",
      "Handled request payload validation, error propagation, and CORS policies to maintain reliable cross-service communication between Node.js and FastAPI."
    ],
    technologies: ["Node.js", "Express", "MongoDB", "FastAPI", "LangChain RAG", "Whisper", "Edge-TTS"]
  }
];