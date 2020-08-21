import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allWordpressPost(sort: {fields: date, order: DESC}) {
          edges {
            node {
              title
              slug
              date(formatString: "MMMM Do, YYYY")
              featured_media {
                source_url
              }
              excerpt
              content
            }
          }
        }
      }
    `)
    return (
        <Layout pageMeta={{
          title: "Our Blog",
          keywords: ["tāniko group blog"],
          description: "Keep informed with our latest blogs."
        }}>
         <div className="blog-hero-image">
            <h2 className="img-text">Our Blog</h2>
          </div>
          <div className="section">
          <div className="mahi-spacing">
              <ol className="columns">{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <Link to={`/blog/${edge.node.slug}`}>
                    <article className="column">
                        <div className="card-style card">
                            <figure className="image is-4by3">
                              <img src={edge.node.featured_media.source_url} alt={edge.node.title}/>
                            </figure>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                  <span class="blog-date">{edge.node.date}</span>
                                <p className="blog-title">{edge.node.title}</p>
                              </div>
                            </div>
                              <button className="blog-button">Read More</button>                         
                          </div>
                        </div>
                    </article>
                </Link>
                )
              })}
              </ol>
            </div>
          </div>
        </Layout>
    )
}

export default BlogPage

