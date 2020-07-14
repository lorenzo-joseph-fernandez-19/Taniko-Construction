import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      content
      featured_media {
        source_url
      }
    }
  }
`
    const BlogPostTemplate = ({ data }) => (
      <Layout pageMeta={{
        title: `${data.wordpressPost.title}`,
        keywords: ["Taniko"],
        description: `${data.wordpressPost.content}`
      }}>
      <div className="hero is-medium is-bold">
         <img className="blog-image" src={data.wordpressPost.featured_media.source_url} alt={data.wordpressPost.title} width="2000" height="400" />
       </div>
       <div className="container container-position">
          <div className="column is-8 is-offset-2">
            <div className="card card-style">
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <h1 className="blog-post-title">{data.wordpressPost.title}</h1>
                    <div className="is-centered level-item">
                      <span className="blog-post-date">{data.wordpressPost.date}</span>
                    </div>
                  </div>
                </div>
                <div className="content blog-post-content-style">
                <p dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}></p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
    )
    
export default BlogPostTemplate
