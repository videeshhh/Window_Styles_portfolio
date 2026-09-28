import React from 'react';;
import icon from './assets/icon.svg';
import userIcon from './assets/userIcon.svg';
import Resume from './content/Resume.jsx'
import Projects from './content/Projects.jsx'
import About from './content/About.jsx'


export const desktopItems = [
  { id: 'about',
    label: 'About Me', 
    icon: userIcon, 
    content : About 
  },

  { id: 'projects',
    label: 'My Projects', 
    icon: icon , 
    content : Projects  
  },

  { id: 'resume', 
    label: 'Resume.pdf', 
    icon: icon , 
    content: Resume 
  }
];