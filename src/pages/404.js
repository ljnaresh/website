import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import * as styles from '../styles/shared.module.css';

const ErrorPage = () => {
  console.log(styles);
  return (
    <Layout>
      <div className='row d-flex'>
        <div className='col-12'>
          <Heading>Something's wrong here.</Heading>
          <p>
            I have no idea how you landed on this page! You can try going back{' '}
            <a className={styles['link']} href='/'>
              home
            </a>{' '}
            or try your luck by clicking any of the links in the navigation on the left.
          </p>
        </div>
        <div className='col-12 col-lg-6'>
          <img src={require('../images/fox.jpg')} className='img-fluid' alt='Fox' />
          <p className='my-1'>
            Photo by{' '}
            <a
              className={styles['link']}
              href='https://unsplash.com/@alex_andrews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            >
              Alexander Andrews
            </a>{' '}
            on{' '}
            <a
              className={styles['link']}
              href='https://unsplash.com/images/feelings/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
