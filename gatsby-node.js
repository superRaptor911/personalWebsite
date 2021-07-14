const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {data} = await graphql(`
    query MyQuery {
      allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
        nodes {
          childrenMarkdownRemark {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allFile.nodes.forEach(node => {
    console.log(node);
    actions.createPage({
      path: '/posts/' + node.childrenMarkdownRemark[0].frontmatter.slug,
      component: path.resolve('./src/templates/post-template.js'),
      context: {
        slug: node.childrenMarkdownRemark[0].frontmatter.slug,
      },
    });
  });
};
