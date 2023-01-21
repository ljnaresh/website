import React from 'react';

import { useState } from 'react';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';

import * as styles from './RightMenu.module.css';

const RightMenu = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('prefersDarkMode'));

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('prefersDarkMode', !darkMode);
    setDarkMode(!darkMode);
  };

  const themeToggleButton = (
    <div>
      <button type='button' className={`d-flex ${styles['themeToggleButton']}`} onClick={toggleDarkMode}>
        {darkMode ? <BrightnessHighFill /> : <MoonFill />}
      </button>
    </div>
  );

  return <section className='w-100 d-flex justify-content-center'>{themeToggleButton}</section>;
};

export default RightMenu;
