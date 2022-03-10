import React from 'react';
import renderer from 'react-test-renderer';

import PageLayout from '../PageLayout';

describe('PageLayout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PageLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
