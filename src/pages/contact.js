import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
             <div className="container is-fluid has-text-white">
                <section className="section is-medium has-text-centered">
                  <div className="container">
                    <h1>Get In Touch</h1>
                    <hr className="red-line-title" />
                    <div className="columns">
                      <div className="column is-6">
                        <h4 className="title is-spaced is-4">Let's talk </h4>
                        <p className="subtitle">We're here to answer your questions.</p>
                        <div>
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-24x24"><img src="placeholder/icons/map-marker.svg" alt="" /></figure>
                            </div>
                            <div className="media-content">
                              <div className="content">
                                <p>Lorem Ipsum</p>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-24x24"><img src="placeholder/icons/phone.svg" alt="" /></figure>
                            </div>
                            <div className="media-content">
                              <div className="content">
                                <p>021678789789</p>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-24x24"><img src="placeholder/icons/envelope.svg" alt="" /></figure>
                            </div>
                            <div className="media-content">
                              <div className="content">
                              <a href="mailto:tanikogroup@gmail.com?Subject=General%20Enquiry" target="_top">tanikogroup@gmail.com</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column is-5 is-offset-1">

                        <form name="contact" method="POST" data-netlify="true">
                            <div className="block">
                                <label className="label has-text-white has-text-left">Full Name</label>
                                <input className="input has-background-black" type="text" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label has-text-white has-text-left">Phone</label>
                                <input className="input has-background-black" type="text" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label has-text-white has-text-left">Email</label>
                                <input className="input has-background-black" type="email" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label has-text-white has-text-left">Message</label>
                                <textarea className="textarea has-background-black" rows="5" placeholder="" required="required"></textarea>
                            </div>

                            <div className="field">
                            <div className="control">
                              <button className="button button-style" type="submit">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
        </Layout>
    )
}

export default contactPage