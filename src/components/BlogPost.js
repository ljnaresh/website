import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CalendarFill, ClockFill } from 'react-bootstrap-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
        children={post.body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={darcula}
                language={match[1]}
                PreTag='div'
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1: (props) => <Heading size={1}>{props.children}</Heading>,
          h2: (props) => <Heading size={2}>{props.children}</Heading>,
          h3: (props) => <Heading size={3}>{props.children}</Heading>,
          h4: (props) => <Heading size={4}>{props.children}</Heading>,
          h5: (props) => <Heading size={5}>{props.children}</Heading>,
          h6: (props) => <Heading size={6}>{props.children}</Heading>,
          a: (props) => (
            <a href={props.href} className={`${styles['link']}`}>
              {props.children}
            </a>
          ),
        }}
      />
    </>
  );
};

export default BlogPost;
