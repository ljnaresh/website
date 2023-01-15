import { useState } from 'react';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';

import styles from './RightMenu.module.css';

const RightMenu = () => {
  const [isDarkModeActivated, setIsDarkModeActivated] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeActivated(!isDarkModeActivated);
    document.body.classList.toggle('dark');
  };

  const themeToggleButton = (
    <div>
      <button type='button' className={`d-flex ${styles['theme-toggle-button']}`} onClick={toggleDarkMode}>
        {isDarkModeActivated ? <BrightnessHighFill /> : <MoonFill />}
      </button>
    </div>
  );

  return <section className='w-100 d-flex justify-content-center'>{themeToggleButton}</section>;
};

export default RightMenu;
