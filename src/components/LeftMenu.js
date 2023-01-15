import React from 'react';

import * as styles from './LeftMenu.module.css';

const LeftMenu = () => {
  return (
    <section className='w-100'>
      <ul className='nav justify-content-center d-flex align-items-stretch flex-lg-column align-items-lg-center w-100'>
        <li className='nav-item'>
          <a className={`nav-link fw-semibold ${styles['link']}`} href='/'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className={`nav-link fw-semibold ${styles['link']}`} href='/blog'>
            Blog
          </a>
        </li>
        <li className='nav-item'>
          <a className={`nav-link fw-semibold ${styles['link']}`} href='/about'>
            About
          </a>
        </li>
      </ul>
    </section>
  );
};

export default LeftMenu;
