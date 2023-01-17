import { Link } from 'gatsby';
import React from 'react';

import * as styles from './BlogPostPreview.module.css';
import Heading from './Heading';

const BlogPostPreview = (props) => {
  const { title, subtitle, tags, slug } = props;

  return (
    <div className='col-12 p-0'>
      <article className={`card col-12 w-100 ${styles['blogPostPreview']}`}>
        <div className='card-body p-4'>
          <Heading size={5} className='card-title fw-bold'>
            {title}
          </Heading>
          <p className='card-text mb-1'>{subtitle}</p>
          {tags.map((tag) => {
            return (
              <span key={tag} className={`badge fw-semibold me-2 ${styles['blogPostPreviewTag']}`}>
                #{tag}
              </span>
            );
          })}
          <Link to={`${slug}`} className='stretched-link'>
            {''}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPreview;
