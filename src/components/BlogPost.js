import React from 'react';

import ReactMarkdown from 'react-markdown';

const BlogPost = (props) => {
  return <ReactMarkdown>{props.children}</ReactMarkdown>;
};

export default BlogPost;
