import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import * as styles from '../styles/shared.module.css';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

const ErrorPage = ({ data }) => {
  console.log(data);
  const foxImage = getImage(data.allImageSharp.nodes[0].gatsbyImageData);
  return (
    <Layout>
      <div className='row d-flex'>
        <div className='col-12'>
          <Heading>Something's wrong here.</Heading>
          <p>
            I have no idea how you landed on this page! You can try going back{' '}
            <Link className={styles['link']} to='/'>
              home
            </Link>{' '}
            or try your luck by clicking any of the links in the navigation on the left.
          </p>
        </div>
        <div className='col-12 col-lg-6'>
          <GatsbyImage image={foxImage} alt={data.allImageSharp.nodes[0].fixed.originalName} className='mb-1' />
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

export const pageQuery = graphql`
  query MyQuery {
    allImageSharp(filter: { fixed: { originalName: { eq: "fox.jpg" } } }) {
      nodes {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        fixed {
          originalName
        }
      }
    }
  }
`;

export default ErrorPage;
