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
          <div className="section is-medium has-text-centered">
          <h1>Our Blog</h1>
          <hr className="red-line-title" />
                <ol className="columns blog-column">{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <Link to={`/blog/${edge.node.slug}`}>
                    <article className="column">
                        <div className="card">
                          <div className="card-image">
                            <figure className="image">
                              <img src={edge.node.featured_media.source_url} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p className="blog-title has-text-centered">{edge.node.title}</p>
                                <div class="is-centered level-item">
                                  <span class="blog-date">{edge.node.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="content blog-content-style">
                              <p dangerouslySetInnerHTML={{ __html:edge.node.excerpt}} />
                            </div>
                              <p className="read-more">Read More...</p>
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
