import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import './dekstopIcon.css';

export default function DesktopIcon({ label, iconSrc, onDoubleClick }) {
  const nodeRef = useRef(null);

  return (
    // Add bounds="parent" back to constrain it to the grid container
    <Draggable nodeRef={nodeRef} bounds="parent">
      <button ref={nodeRef} className="desktop-icon" onDoubleClick={onDoubleClick}>
        <img src={iconSrc} alt={label} className="folder-img" draggable="false" />
        <span className="icon-label">{label}</span>
      </button>
    </Draggable>
  );
}