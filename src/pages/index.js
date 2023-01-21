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
          {console.log(allMdx.nodes)}
          <Heading className='mb-0 p-0'>Recent posts</Heading>
          {allMdx.nodes.map((post) => {
            const { fields } = post;
            const { title, summary, tags } = post.frontmatter;
            console.log(fields.slug);
            return (
              <BlogPostPreview key={fields.slug} title={title} subtitle={summary} tags={tags} slug={fields.slug} />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
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
