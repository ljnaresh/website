import { Link } from 'gatsby';
import React from 'react';

import * as styles from './LeftMenu.module.css';

const LeftMenu = () => {
  return (
    <section className='w-100'>
      <ul className='nav justify-content-center d-flex align-items-stretch flex-lg-column align-items-lg-center w-100'>
        <li className='nav-item'>
          <Link className={`nav-link fw-semibold ${styles['link']}`} to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={`nav-link fw-semibold ${styles['link']}`} to='/blog'>
            Blog
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={`nav-link fw-semibold ${styles['link']}`} to='/about'>
            About
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default LeftMenu;
