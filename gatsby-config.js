/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `nareshlakyajagadisha.github.io`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
<<<<<<< HEAD
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
=======
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
>>>>>>> 8cf3db7 (feat: read blog posts from filesystem)
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
<<<<<<< HEAD
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
=======
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
>>>>>>> 8cf3db7 (feat: read blog posts from filesystem)
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
<<<<<<< HEAD
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
=======
>>>>>>> 8cf3db7 (feat: read blog posts from filesystem)
        name: `posts`,
        path: `${__dirname}/posts`,
      },
      __key: 'posts',
    },
  ],
};
