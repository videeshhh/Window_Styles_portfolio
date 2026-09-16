import React from 'react';;
import icon from './assets/icon.svg';
import userIcon from './assets/userIcon.svg';
import Resume from './content/Resume.jsx'
import Projects from './content/Projects.jsx'

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
  }
];