import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allWpPost {
          edges {
            node {
              content
              date (formatString: "MMMM Do, YYYY")
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              slug
              title
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
          <div className="level">
              <ol className="level-item">{data.allWpPost.edges.map((edge) => { 
                return (
                  <div className="columns is-multiline">
                  <Link className="column" to={`/blog/${edge.node.slug}`}>
                        <div className="card-style card">
                            <figure className="image is-4by3">
                              <img className="img-style" src={edge.node.featuredImage.node.mediaItemUrl} alt={edge.node.title}/>
                            </figure>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p className="blog-title">{edge.node.title}</p>
                                <span class="blog-date">{edge.node.date}</span>
                              </div>
                            </div>
                              <button className="blog-button">Read More</button>                         
                          </div>
                        </div>
                </Link>
                </div>
                )
              })}
              </ol>
            </div>
          </div>
        </Layout>
    )
}

export default BlogPage

