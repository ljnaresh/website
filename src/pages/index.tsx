import '../css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import { Badge, Card, CardBody, CardSubtitle, CardTitle, Col, Input, Row } from 'reactstrap';

import PageLayout from '../components/page-layout/PageLayout';

type DataProps = {
  data: {
    allMdx: {
      nodes: Array<{
        frontmatter: {
          date: string;
          title: string;
          summary: string;
          tags: string;
        };
        id: string;
        slug: string;
        name: string;
        rawBody: string;
      }>;
    };
  };
};

const BlogPostList = ({ data }: DataProps) => {
  let posts = data.allMdx.nodes;

  const [query, setQuery] = useState('');
  if (query !== '') {
    posts = posts.filter((post) => post.rawBody.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <>
      <PageLayout>
        <Input
          placeholder='Search or filter posts based on tags'
          className='mt-4'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
          }}
        ></Input>
        {posts.map((post) => (
          <article key={post.id}>
            <Row key={post.name} className='my-4'>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle tag='h5'>{post.frontmatter.title}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>
                      {post.frontmatter.summary}
                    </CardSubtitle>
                    <div className='d-inline-block float-start'>
                      {post.frontmatter.tags
                        .replace(/\s/g, '')
                        .split(',')
                        .map((tag) => {
                          return (
                            // Return a componet consisting of Badge and a whitespace to visual show
                            // separation between badge elements
                            <React.Fragment key={tag}>
                              <Badge className='d-inline-block' pill>
                                {tag}
                              </Badge>{' '}
                            </React.Fragment>
                          );
                        })}
                    </div>
                    <div className='d-inline-block float-end'>
                      <Link className='card-link btn btn-secondary rounded-0' to={`/${post.slug}`}>
                        Read more
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </article>
        ))}
      </PageLayout>
    </>
  );
};

export default BlogPostList;

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { frontmatter: { draft: { eq: false } } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          summary
          tags
        }
        id
        slug
        rawBody
      }
    }
  }
`;
