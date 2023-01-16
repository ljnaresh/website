import { graphql } from 'gatsby';
import React from 'react';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

function IndexPage({ data }) {
  return (
    <Layout>
      <div className='container'>
        <BlogPost data={data} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD-MMM-YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        hero_image_alt_text
        hero_image_shutterbug
        hero_image_shutterbug_link
        hero_image_source
        hero_image_source_link
        draft
      }
      fields {
        timeToRead {
          time
        }
      }
      body
    }
  }
`;

export default IndexPage;
