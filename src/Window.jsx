import React from 'react';
import './Window.css';

export default function Window({ title, onClose, children }) {
  return (
    <div className="os-window">
      <div className="title-bar">
        <span className="title-text">{title}</span>
        <div className="window-controls">
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}