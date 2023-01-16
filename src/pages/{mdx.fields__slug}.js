import { graphql } from 'gatsby';
import React from 'react';

import BlogPostPreview from '../components/BlogPostPreview';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

function IndexPage({ data }) {
  const { allMdx } = data;
  return (
    <Layout>
      <div className='container'>Hello</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          summary
          tags
          title
        }
      }
    }
  }
`;

export default IndexPage;
