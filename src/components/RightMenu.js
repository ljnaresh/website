import React from 'react';

import { useState } from 'react';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';

import * as styles from './RightMenu.module.css';

const RightMenu = () => {
  const [isDarkModeActivated, setIsDarkModeActivated] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeActivated(!isDarkModeActivated);
    document.body.classList.toggle('dark');
  };

  const themeToggleButton = (
    <div>
      <button type='button' className={`d-flex ${styles['themeToggleButton']}`} onClick={toggleDarkMode}>
        {isDarkModeActivated ? <BrightnessHighFill /> : <MoonFill />}
      </button>
    </div>
  );

  return <section className='w-100 d-flex justify-content-center'>{themeToggleButton}</section>;
};

export default RightMenu;
