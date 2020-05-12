import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from "gatsby-image"


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
        description: "Taniko Blogs"
      }}>
      <div className="hero is-medium is-bold">
         <img className="blog-image" src={data.wordpressPost.featured_media.source_url} alt={data.wordpressPost.title} width="2000" height="400" />
       </div>
       <div class="container container-position">
          <div class="column is-8 is-offset-2">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <h1 class="is-size-1 has-text-black">{data.wordpressPost.title}</h1>
                    <div class="tags has-addons is-centered level-item">
                      <span class="tag is-danger is-rounded">@skeetskeet</span>
                      <span class="tag is-rounded">{data.wordpressPost.date}</span>
                    </div>
                  </div>
                </div>
                <div class="content content-style">
                <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}/>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="section is-medium"></div>
    </Layout>
    )
    
export default BlogPostTemplate
