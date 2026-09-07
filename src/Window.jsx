import React, { useRef, useEffect } from 'react';
import WindowComponent from 'react-flexi-window';
import './Window.css';

export default function Window({ title, onClose, children }) {
  const glassRef = useRef(null);

  // This hook strips the stubborn default styles from the library's wrapper
  useEffect(() => {
    if (glassRef.current && glassRef.current.parentElement) {
      const wrapper = glassRef.current.parentElement;
      wrapper.style.backgroundColor = 'transparent';
      wrapper.style.boxShadow = 'none';
      wrapper.style.border = 'none';
    }
  }, []);

  return (
    <WindowComponent
      w={600}
      h={400}
      x={window.innerWidth / 2 - 300} 
      y={100}
      boundary={true}
    >
      <div className="glass-container" ref={glassRef}>
        <div className="title-bar">
          <span className="title-text">{title}</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </WindowComponent>
  );
}