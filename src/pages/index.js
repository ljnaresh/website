import { graphql } from 'gatsby';
import React from 'react';

import BlogPostPreview from '../components/BlogPostPreview';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

function IndexPage({ data }) {
  const { allMarkdownRemark } = data;
  return (
    <Layout>
      <div className='container'>
        <div className='row align-items-start gy-2 g-lg-4'>
          <Heading className='mb-0 p-0'>Recent posts</Heading>
          {allMarkdownRemark.nodes.map((post) => {
            const { title, summary, tags } = post.frontmatter;
            return <BlogPostPreview key={post.id} title={title} subtitle={summary} tags={tags} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
          title
          summary
        }
        id
      }
    }
  }
`;

export default IndexPage;
