import React from 'react';;
import icon from './assets/icon.svg';
import userIcon from './assets/userIcon.svg';
import Resume from './content/Resume.jsx'
import Projects from './content/Projects.jsx'
import Platform from './content/Platform.jsx';

export const desktopItems = [
  { id: 'projects',
    label: 'My Projects', 
    icon: icon , 
    content : Projects  
  },

  { id: 'resume', 
    label: 'Resume.pdf', 
    icon: userIcon , 
    content: Resume 
  },

  {
    id : "platforms",
    label : "Programming Platforms",
    icon : icon,
    content : Platform
  }
];