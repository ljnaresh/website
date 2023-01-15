import React from 'react';

import * as styles from './BlogPostPreview.module.css';
import Heading from './Heading';

const BlogPostPreview = () => {
  return (
    <div className='col-12 p-0'>
      <article className={`card col-12 w-100 ${styles['blogPostPreview']}`}>
        <div className='card-body p-4'>
          <Heading size={5} className='card-title fw-bold'>
            Blog Post Title
          </Heading>
          <p className='card-text mb-1'>Subtitle of the blog post</p>
          <span className={`badge fw-semibold me-2 ${styles['blogPostPreviewTag']}`}>#first-tag</span>
          <span className={`badge fw-semibold me-2 ${styles['blogPostPreviewTag']}`}>#second-tag</span>
          <a href='/' className='stretched-link'>
            {''}
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPreview;
