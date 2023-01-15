import React from 'react';

import * as styles from './Layout.module.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const Layout = (props) => {
  return (
    <div className={`d-flex flex-column align-items-stretch ${styles['layout']}`}>
      <div className={`d-flex flex-column flex-lg-row flex-grow-1 align-items-stretch w-100`}>
        <div className='d-lg-flex align-items-stretch flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-3 p-2 p-lg-5'>
          <LeftMenu />
        </div>
        <div className='d-lg-flex align-items-stretch flex-grow-1 flex-md-grow-1 flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-6 p-2 p-lg-5'>
          {props.children}
        </div>
        <div className='d-lg-flex align-items-stretch flex-lg-grow-1 mx-0 col-12 col-md-12 col-lg-3 p-2 p-lg-5'>
          <RightMenu />
        </div>
      </div>
      <section className='mx-0'>
        <footer className='col-12 col-sm-12 text-center p-3 border-top'>
          <p>
            <small>© Copyright 2023 Naresh Lakya Jagadisha</small>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Layout;
