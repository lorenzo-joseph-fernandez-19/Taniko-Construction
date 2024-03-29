import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!){
      wpPost(slug: { eq: $slug }) {
      content
      date(formatString: "MMMM Do, YYYY")
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      slug
      title
      excerpt
    }
  }
`
    const BlogPostTemplate = ({ data }) => (
      <Layout pageMeta={{
        title: `${data.wpPost.title}`,
        keywords: ["Taniko"],
        description: `${data.wpPost.excerpt}`
      }}>
      <div className="hero">
         <img className="blog-image" src={data.wpPost.featuredImage.node.mediaItemUrl} alt={data.wpPost.title} />
          <p className="img-text">{data.wpPost.title}</p>
       </div>
       <div className="container-position">
          <div className="column">
            <div className="card card-style">
              <div className="card-content">
                <div className="content blog-post-content-style">
                <p dangerouslySetInnerHTML={{ __html: data.wpPost.content }}></p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
    )
    
export default BlogPostTemplate
