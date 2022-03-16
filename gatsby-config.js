/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  pathPrefix: `/website`,
  siteMetadata: {
    title: ``,
    siteUrl: `http://ljnaresh.github.io/website`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 840,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'none',
              theme: 'vscode',
              lineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
      __key: 'posts',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
  ],
};
