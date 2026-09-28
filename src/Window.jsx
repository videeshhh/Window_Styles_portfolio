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
      w={900}
      h={900}
      x={window.innerWidth / 2 - 450} 
      y={50}
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