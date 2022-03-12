import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import styled from 'styled-components';

import PageLayout from '../components/page-layout/PageLayout';
import NotFoundPage from './404';

// Load the component for code highlighting
deckDeckGoHighlightElement();

const StyledMarkDownContent = styled.div`
  text-align: justify;
  box-shadow: none !important;
  deckgo-highlight-code {
    box-shadow: none !important;
  }
`;

const StyledPhotoCredit = styled.p`
  font-size: 0.75rem;
`;

type DataProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        // TODO: Having the hero_image as type ImageDataLike fails snapshot test
        // as the data fetched by graphql doesn't match the values of union type ImageDataLike
        hero_image: any;
        hero_image_alt_text: string;
        hero_image_shutterbug: string;
        hero_image_shutterbug_link: string;
        hero_image_source: string;
        hero_image_source_link: string;
        draft: boolean;
      };
      body: string;
      timeToRead: number;
    };
  };
};

const BlogPost = ({ data }: DataProps) => {
  const post = data.mdx;

  if (post.frontmatter.draft) {
    return <NotFoundPage></NotFoundPage>;
  }

  // Typecasting is required here as getImage can return undefined or IGatsbyImageData
  // and image attribute in GatsbyImage component will only accept IGatsbyImageData
  const heroImage = getImage(post.frontmatter.hero_image) as IGatsbyImageData;

  return (
    <PageLayout>
      <p className='my-4 text-muted d-inline-block float-start'>
        <i className='bi bi-calendar-date'></i>
        {` ${post.frontmatter.date}`.toUpperCase()}
      </p>
      <p className='my-4 text-muted d-inline-block float-end'>
        <i className='bi bi-clock'></i> {` ${post.timeToRead}`} min
      </p>
      <GatsbyImage image={heroImage} alt={post.frontmatter.hero_image_alt_text} className='mb-1' />
      <StyledPhotoCredit className='text-end'>
        Photo by <a href={post.frontmatter.hero_image_shutterbug_link}>{post.frontmatter.hero_image_shutterbug}</a> on{' '}
        <a href={post.frontmatter.hero_image_source_link}>{post.frontmatter.hero_image_source}</a>
      </StyledPhotoCredit>
      <StyledMarkDownContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </StyledMarkDownContent>
    </PageLayout>
  );
};

export const query = graphql`
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
      body
      timeToRead
    }
  }
`;

export default BlogPost;
