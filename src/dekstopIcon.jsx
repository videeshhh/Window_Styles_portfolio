import React from 'react';
import Draggable from 'react-draggable';
import './dekstopIcon.css';

export default function DesktopIcon({ label, iconSrc, onDoubleClick }) {
  return (
    <Draggable bounds="parent">
      <button className="desktop-icon" onDoubleClick={onDoubleClick}>
        <img src={iconSrc} alt={label} className="folder-img" />
        <span className="icon-label">{label}</span>
      </button>
    </Draggable>
  );
}