import { Link } from 'gatsby';
import * as React from 'react';

import PageLayout from '../components/page-layout/PageLayout';

const NotFoundPage = () => {
  return (
    <PageLayout>
      <title>Not found</title>
      <h1 className='my-4 d-flex justify-content-center'>
        Page not found <i className='bi bi-emoji-frown'></i>
      </h1>
      <p className='d-flex justify-content-center'>Sorry we couldn’t find what you were looking for.</p>
      <div className='text-center'>
        <Link className='btn btn-secondary rounded-0' to={`/`}>
          <i className='bi bi-house'></i>
          {` `}Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
