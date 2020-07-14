exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /hero-slider/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const res = await graphql(`
    query {
        allWordpressPost(sort: {fields: date, order: DESC}) {
            edges {
                node {
                  slug
                }
              }
            }
        }
  `)
  res.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}