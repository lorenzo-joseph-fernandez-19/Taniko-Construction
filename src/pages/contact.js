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
                <div className="contact-hero-image">
                  <h2 className="img-text">Contact Us</h2>
                </div>

                <section className="columns section contact-spacing contact-padding">
                  <div className="column is-7">
                    <p className="contact-subtitle columns ">To discuss your business needs <br /> please get in contact with us today.</p>
                      <OutboundLink className="column contact-button" href="tel:+6427 515 6058" rel="noreferrer noopener"><FontAwesomeIcon icon={['fas', 'phone']} rotation={90} className="icon-style" />027 515 6058</OutboundLink>
                      <OutboundLink className="column contact-button" href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} className="icon-style" />  info@taniko.co.nz</OutboundLink>
                      <OutboundLink className="column contact-button" href="https://www.instagram.com/taniko_nz/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon className="icon-style" icon={['fab', 'instagram']} />taniko_nz</OutboundLink>
                  </div>
                      <div className="column is-6">
                        <form action="https://getform.io/f/faa4e5b2-0bf7-43a4-828d-f5bce25bdfd3" method="POST">   
                            <div className="block">
                              <label className="label-style">Full Name<span className="text-is-red">*</span>
                                <input className="input input-style" type="text" name="Full Name" id="Full Name"required="required"/>
                              </label>
                            </div>

                            <div className="block">
                              <label className="label-style">Phone<span className="text-is-red">*</span>
                                <input className="input input-style" type="text" name="Phone" id="Phone" required="required"></input>
                              </label>
                            </div>

                            <div className="block">
                              <label className="label-style">Email<span className="text-is-red">*</span>
                                <input className="input input-style" type="email" name="Email" id="Email" required="required"/>
                              </label>
                            </div>

                            <div className="block">
                                <label className="label-style">Message<span className="text-is-red">*</span>
                                  <textarea className="textarea input-style" rows="5" name="Message" id="Message" required="required"></textarea>
                                </label>
                            </div>
                            <button className="button-style" type="submit">Send</button>
                        </form>
                      </div>
                </section>
        </Layout>
    )
}

export default contactPage
