import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Photo from "../images/construction.jpg"
import Img from "gatsby-image"


export const query = graphql`
    query {
        allWordpressPost(sort: {fields: date, order: DESC}) {
            edges {
                node {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                content
                }
            }
        }
      }
    `  

    const BlogPostTemplate = ({ data }) => (
      <Layout pageMeta={{
        title: `${data.allWordpressPost.edges.title}`,
        keywords: ["Taniko"],
        description: "Taniko Blogs"
      }}>
      {/* <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      /> */}
      <div class="hero is-medium is-bold">
         <img src={Photo} alt="construction worker" width="2000" height="400" />
          <div class="hero-body">
           <div class="container has-text-centered">
              <h1 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
           </div>
        </div>
       </div>
      <h1>{data.allWordpressPost.title}</h1>
      <p>
        Written  on {data.allWordpressPost.date}
      </p>
      {/* <Img
        sizes={data.wordpressPost.acf.feat_img.localFile.childImageSharp.sizes}
        alt={data.wordpressPost.title}
        style={{ maxHeight: 450 }}
      /> */}
      <div
        dangerouslySetInnerHTML={{ __html: data.allWordpressPost.content }}
      />
    </Layout>
    )
    
export default BlogPostTemplate
