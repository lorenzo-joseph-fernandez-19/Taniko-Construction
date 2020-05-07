import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Home from '../images/home.png'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
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
            `)
    return (
        <Layout pageMeta={{
          title: "Blog",
          keywords: ["Taniko"],
          description: "Taniko"
        }}>
          <div className="section">
            <div className="container has-text-centered">
                <h1 className="title is-1">News</h1> 
                <ol className="tile is-ancestor">{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <Link to={`/news/${edge.node.slug}`}>
                    <article className="tile is-parent">
                      <div className="tile is-child">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src={Home} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <p class="title has-text-centered is-5">{edge.node.title}</p>
                              </div>
                            </div>
                            <div class="content">
                              <p dangerouslySetInnerHTML={{ __html:edge.node.content}} />
                            </div>
                            <footer class="card-footer has-text-primary">
                              <p class="card-footer-item">
                              <span>{edge.node.date}</span>
                              </p>
                            </footer>
                          </div>
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


