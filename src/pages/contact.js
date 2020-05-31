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
                <div className="hero-image">
                    <h1 className="hero-image-text">Contact Us</h1>
                    <div className="media">
                      <div className="media-content">
                        <div className="content centered">
                          <OutboundLink className="contact-button" href="tel:+62896706255135" rel="noreferrer noopener">Call us at +62-896-7062-55135</OutboundLink>
                          <OutboundLink className="contact-button" href="mailto:tanikogroup@gmail.com?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top">tanikogroup@gmail.com</OutboundLink>
                        </div>
                      </div>
                    </div>
                </div>

                <section className="section has-text-centered">
                  <div className="container">
                    <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                      <div className="contact-spacing">
                        <form name="contact" data-netlify-recaptcha="true" method="POST" data-netlify="true">
                            <div className="block">
                                <label className="label label-style">Full Name<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="text" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Phone<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="text" placeholder="" required="required"></input>
                            </div>

                            <div className="block">
                                <label className="label label-style">Email<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="email" placeholder="" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Message<span className="text-is-red">*</span></label>
                                <textarea className="textarea input-style" rows="5" placeholder="" required="required"></textarea>
                            </div>

                            <div className="field">
                            <div data-netlify-recaptcha="true"></div>
                            <div className="control">
                              <button className="button button-style" type="submit">Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                </section>
        </Layout>
    )
}

export default contactPage