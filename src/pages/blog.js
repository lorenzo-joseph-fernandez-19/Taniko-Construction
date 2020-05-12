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
          title: "Blog",
          keywords: ["Taniko"],
          description: "Taniko"
        }}>
          <div className="section is-medium has-text-centered">
          <h1 className="is-size-1 has-text-white">Our Blog</h1> 
                <ol>{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <div className="section is-medium">
                  <Link to={`/blog/${edge.node.slug}`}>
                    <article className="columns">
                      <div className="column is-one-third">
                        <div className="card large">
                          <div className="card-image">
                            <figure className="image">
                              <img src={edge.node.featured_media.source_url} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p className="title has-text-centered is-4">{edge.node.title}</p>
                                <p className="has-text-centered">{edge.node.date}</p>
                              </div>
                            </div>
                            <div className="content">
                              <p dangerouslySetInnerHTML={{ __html:edge.node.excerpt}} />
                            </div>
                            <footer className="card-footer has-text-info">
                              <p className="card-footer-item">
                              <p className="read-more">Read More...</p>
                              </p>
                            </footer>
                          </div>
                        </div>
                      </div>
                    </article>
                </Link>
                </div>
                )
              })}
              </ol>
            </div>
        </Layout>
    )
}

export default BlogPage
