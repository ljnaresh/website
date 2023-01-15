import React from 'react';

import BlogPostPreview from '../components/BlogPostPreview';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <div className='container'>
        <div className='row align-items-start gy-2 g-lg-4'>
          <Heading className='mb-0 p-0'>Recent posts</Heading>
          <BlogPostPreview />
          <BlogPostPreview />
          <BlogPostPreview />
          <BlogPostPreview />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
