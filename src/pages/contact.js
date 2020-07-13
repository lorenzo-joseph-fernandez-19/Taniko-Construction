import React from 'react'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["tāniko group contact"],
            description: "Contact Us. We are here to help. Send us a message using the form below and we'll get back to you as soon as we can."
        }}>
                <div className="section has-text-centered">
                  <div className="">
                    <h2 className="h2">Contact Us</h2>
                    <hr className="red-line-title" />
                      <div className="columns">
                        <div className="column phone-button">
                          <OutboundLink className="contact-button level-item" href="tel:+6427 515 6058" rel="noreferrer noopener"><FontAwesomeIcon icon={['fas', 'phone']} rotation={90} className="icon-style" />027 515 6058</OutboundLink>
                        </div>                        
                        <div className="column mail-button">
                          <OutboundLink className="contact-button level-item" href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} className="icon-style" />  info@taniko.co.nz</OutboundLink>
                        </div>
                      </div>
                  </div>
                </div>

                <section className="has-text-centered">
                    <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                      <div className="contact-spacing">
                        <form name="Contact Form" data-netlify-recaptcha="true" method="POST" data-netlify="true" action="thank-you">
                            <div className="block">
                                <label className="label label-style">Full Name<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="text" name="Full Name" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Phone<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="text" name="Phone" required="required"></input>
                            </div>

                            <div className="block">
                                <label className="label label-style">Email<span className="text-is-red">*</span></label>
                                <input className="input input-style" type="email" name="Email" required="required"/>
                            </div>

                            <div className="block">
                                <label className="label label-style">Message<span className="text-is-red">*</span></label>
                                <textarea className="textarea input-style" rows="5" name="Message" required="required"></textarea>
                            </div>
                            <div data-netlify-recaptcha="true"></div>
                            <button className="button-style" type="submit">Send</button>
                        </form>
                      </div>
                </section>
        </Layout>
    )
}

export default contactPage