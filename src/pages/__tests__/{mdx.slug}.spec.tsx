import React from 'react';
import renderer from 'react-test-renderer';

import BlogPost from '../{mdx.slug}';
import * as BlogPostData from './BlogPostData.json';

describe('BlogPost', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BlogPost data={BlogPostData.data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
