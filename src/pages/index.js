import { graphql } from 'gatsby';
import React from 'react';

import BlogPostPreview from '../components/BlogPostPreview';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

function IndexPage({ data }) {
  const { allMdx } = data;
  return (
    <Layout>
      <div className='container'>
        <div className='row align-items-start gy-2 g-lg-4'>
          <Heading className='mb-0 p-0'>Recent posts</Heading>
          {allMdx.nodes.map((post) => {
            const { title, summary, tags, slug } = post.frontmatter;
            return <BlogPostPreview key={post.id} title={title} subtitle={summary} tags={tags} slug={slug} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          slug
          summary
          tags
          title
        }
      }
    }
  }
`;

export default IndexPage;
