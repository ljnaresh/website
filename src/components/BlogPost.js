import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CalendarFill, ClockFill } from 'react-bootstrap-icons';

import * as styles from '../styles/shared.module.css';
import ReactMarkdown from 'react-markdown';
import Heading from './Heading';

const BlogPost = (props) => {
  const post = props.data.mdx;
  const heroImage = getImage(post.frontmatter.hero_image);
  return (
    <>
      <p className='mb-4 d-inline-block float-start ali'>
        <CalendarFill />
        {` ${post.frontmatter.date}`.toUpperCase()}
      </p>
      <p className='mb-4 d-inline-block float-end'>
        <ClockFill />
        {` ${Math.ceil(post.fields.timeToRead.time / 60000)}`} min
      </p>
      <GatsbyImage image={heroImage} alt={post.frontmatter.hero_image_alt_text} className='mb-1' />
      <p>
        Photo by{' '}
        <a className={styles['link']} href={post.frontmatter.hero_image_shutterbug_link}>
          {post.frontmatter.hero_image_shutterbug}
        </a>
        {' on '}
        <a className={styles['link']} href={post.frontmatter.hero_image_source_link}>
          {post.frontmatter.hero_image_source}
        </a>
      </p>
      <ReactMarkdown
        components={{
          h1: Heading,
        }}
      >
        {post.body}
      </ReactMarkdown>
    </>
  );
};

export default BlogPost;
