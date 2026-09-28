import React from 'react';

export default function Background({ videoSrc }) {
  return (
    <img src={videoSrc} alt="Background" className="bg-image" />
  );
}