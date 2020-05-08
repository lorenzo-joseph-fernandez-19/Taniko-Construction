import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Photo from '../images/construction.jpg'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPost(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                      title
                      slug
                      excerpt
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
          <div className="section is-large has-text-centered">
          <h1 className="is-size-1 has-text-white">Our Blog</h1> 
            <div className="container has-text-centered">
                <ol>{data.allWordpressPost.edges.map((edge) => { 
                return (
                  <Link to={`/blog/${edge.node.slug}`}>
                    <article class="columns">
                      <div class="column is-one-third">
                        <div class="card large">
                          <div class="card-image">
                            <figure class="image">
                              <img src={Photo} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <p class="title has-text-centered is-4">{edge.node.title}</p>
                                <p class="has-text-centered">{edge.node.date}</p>
                              </div>
                            </div>
                            <div class="content">
                              <p dangerouslySetInnerHTML={{ __html:edge.node.excerpt}} />
                            </div>
                            <footer class="card-footer has-text-info">
                              <p class="card-footer-item">
                              <p>Read More...</p>
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
