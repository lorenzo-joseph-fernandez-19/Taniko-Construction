import React from 'react'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
                    <p className="contact-subtitle">Send us an email <OutboundLink className="underline" href="mailto:tanikogroup@gmail.com?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top">tanikogroup@gmail.com</OutboundLink></p>
                    <p className="has-text-white is-size-3">OR</p>
                    <p id="space" className="contact-subtitle contact-spacing">Message us using the form below and we'll get back to you as soon as we can.</p>
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
                              <button className="button button-style" type="submit">Send</button>
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