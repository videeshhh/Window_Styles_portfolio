import React, { useState } from 'react';
import Background from './Background';
import DesktopIcon from "./dekstopIcon";
import Window from './Window';
import bgVideo from './assets/bg.mp4'; 
import { desktopItems } from './dekstopConfig'; 
import './App.css';

export default function App() {
  const [activeFolder, setActiveFolder] = useState(null);
  const activeItem = desktopItems.find(item => item.id === activeFolder);

  return (
    <>
      <Background videoSrc={bgVideo} />

      <div className="main-content desktop-grid">
        {desktopItems.map((item) => (
          <DesktopIcon 
            key={item.id} 
            label={item.label} 
            iconSrc={item.icon}
            onDoubleClick={() => setActiveFolder(item.id)} 
          />
        ))}
      </div>

      {activeItem && (
        <Window title={activeItem.label} onClose={() => setActiveFolder(null)}>
          {activeItem.content && React.createElement(activeItem.content)}
        </Window>
      )}
    </>
  );
}