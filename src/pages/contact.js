import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
             <div className="container has-text-white">
                <section className="section is-medium has-text-centered">
                  <div className="container">
                    <h1>Get In Touch</h1>
                    <hr className="red-line-title" />
                    <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                    <p className="has-text-white is-size-3">OR</p>
                        <a href="mailto:tanikogroup@gmail.com?Subject=General%20Enquiry" target="_top">tanikogroup@gmail.com</a>
                      <div className="contact-spacing">
                        <form name="contact" method="POST" data-netlify="true">
                            <div className="block">
                                <label className="label label-style">Full Name</label>
                                <input className="input has-background-black" type="text" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Phone</label>
                                <input className="input has-background-black" type="text" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Email</label>
                                <input className="input has-background-black" type="email" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Message</label>
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
                </section>
              </div>
        </Layout>
    )
}

export default contactPage