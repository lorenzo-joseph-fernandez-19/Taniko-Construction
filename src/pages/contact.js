import React from 'react'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// function filter (inputxt) {
//   let phoneNumber = /^\d{10}$/
//   if (typeof phoneNumber !== number)
//   return alert("Please enter a valid number")
//   else true 
// }

function messageAlert () {
  (alert("Thank you for your message. We'll be in touch"))
}


const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["construction"],
            description: "Taniko Group"
        }}>
                <div className="section is-medium background-img">
                    <h1 className="hero-image-text">Contact Us</h1>
                      <div className="level">
                        <div className="level-item is-flexend">
                          <OutboundLink className="contact-button" href="tel:+64" rel="noreferrer noopener"><FontAwesomeIcon icon={['fas', 'phone']} rotation={90} /> 09 123 456</OutboundLink>
                        </div>                        
                        <div className="level-item is-flexstart">
                          <OutboundLink className="contact-button" href="mailto:tanikogroup@gmail.com?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} />  tanikogroup@gmail.com</OutboundLink>
                        </div>
                      </div>
                    </div>

                <section className="section has-text-centered">
                  <div className="container">
                    <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                      <div className="contact-spacing">
                        <form name="contact" data-netlify-recaptcha="true" method="POST" data-netlify="true" action="/thank">
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
                              <button className="button button-style" type="submit" onClick={messageAlert}>Send</button>
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