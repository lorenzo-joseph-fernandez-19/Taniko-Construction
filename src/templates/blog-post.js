import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


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

const Blog = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.title['en-US']
  //       const url = node.data.target.fields.file['en-US'].url
  //       return <img alt={alt} src={url} />
  //     }


  return (
    <Layout pageMeta={{
      title: `${props.data.allWordpressPost.title}`,
      keywords: ["Taniko"],
      description: "Taniko Blogs"
    }}>
      <div className="hero-body is-fullheight">
        <div className="container">
        <p>{props.data.allWordpressPost.content}</p>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h1 className="is-size-1 has-text-light">{props.data.allWordpressPost.title}</h1>
                <p className="subtitle is-size-3 has-text-light">{props.data.allWordpressPost.date}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
