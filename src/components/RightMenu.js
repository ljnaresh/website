import React from 'react';

import { useEffect, useState } from 'react';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';

import * as styles from './RightMenu.module.css';

const RightMenu = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('prefersDarkMode', 'true');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('prefersDarkMode', 'false');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkModePreference');
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  const themeToggleButton = (
    <div>
      <button
        type='button'
        className={`d-flex ${styles['themeToggleButton']}`}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? <BrightnessHighFill /> : <MoonFill />}
      </button>
    </div>
  );

  return <section className='w-100 d-flex justify-content-center'>{themeToggleButton}</section>;
};

export default RightMenu;
