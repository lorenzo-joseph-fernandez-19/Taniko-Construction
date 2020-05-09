import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
             <div class="container is-fluid has-text-white">
                <section className="section is-large has-text-centered">
                  <div class="container">
                    <h2 class="is-size-1 has-text-white has-text-centered">Get in Touch</h2>
                    <div class="columns">
                      <div class="column is-6">
                        <h4 class="title is-spaced is-4">Let's talk </h4>
                        <p class="subtitle">We're here to answer your questions.</p>
                        <div>
                          <div class="media">
                            <div class="media-lef t">
                              <figure class="image is-24x24"><img src="placeholder/icons/map-marker.svg" alt="" /></figure>
                            </div>
                            <div class="media-content">
                              <div class="content">
                                <p>Lorem Ipsum</p>
                              </div>
                            </div>
                          </div>
                          <div class="media">
                            <div class="media-left">
                              <figure class="image is-24x24"><img src="placeholder/icons/phone.svg" alt="" /></figure>
                            </div>
                            <div class="media-content">
                              <div class="content">
                                <p>021678789789</p>
                              </div>
                            </div>
                          </div>
                          <div class="media">
                            <div class="media-left">
                              <figure class="image is-24x24"><img src="placeholder/icons/envelope.svg" alt="" /></figure>
                            </div>
                            <div class="media-content">
                              <div class="content">
                                <p>taniko@gmail.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-5 is-offset-1">
                        <form>
                          <div class="field">
                            <div class="control">
                              <input class="input" type="email" placeholder="Email" />
                            </div>
                          </div>
                          <div class="field">
                            <div class="select is-fullwidth">
                              <select>
                                <option disabled selected>Select product</option>
                                <option>Product 1</option>
                                <option>Product 2</option>
                                <option>Product 3</option>
                              </select>
                            </div>
                          </div>
                          <div class="field">
                            <div class="control">
                              <textarea class="textarea" rows="5" placeholder="Write something..."></textarea>
                            </div>
                          </div>
                          <div class="field">
                            <div class="control">
                              <button class="button is-primary is-fullwidth" type="submit">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            {/* <div className="containerz">
                <div className="formBox">
                    <form name="contact" method="POST" data-netlify="true">
                        <h2>Contact Us</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="" required="required" />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Phone</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" />
                            <span>Type Your Message Here...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" name=""/>
                        </div>
                    </form>
                </div>
                {/* <div className="imageBox"></div> */}
        </Layout>
    )
}

export default contactPage