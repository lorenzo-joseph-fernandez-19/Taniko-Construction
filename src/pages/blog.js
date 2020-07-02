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
          keywords: ["Taniko"],
          description: "Taniko Group"
        }}>
          <div className="section is-medium background-img">
            <div className="translation-spacing">
              <h1 className="has-text-white">Our Blog</h1>
            </div>
          </div>
          <div className="section people-spacing">
              <ol className="columns blog-column">{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <Link to={`/blog/${edge.node.slug}`}>
                    <article className="column">
                        <div className="card card-style">
                          <div className="card-image">
                            <figure className="image">
                              <img src={edge.node.featured_media.source_url} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                              <div class="">
                                  <span class="blog-date">{edge.node.date}</span>
                                </div>
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
        </Layout>
    )
}

export default BlogPage
