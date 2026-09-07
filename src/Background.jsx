import React from 'react';

export default function Background({ videoSrc }) {
  return (
    <video autoPlay loop muted playsInline className="bg-video">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}