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
                <div className="has-text-centered">
                  <div className="hero-image">
                    <h2 className="img-text">Contact Us</h2>
                  </div>
                      <div className="columns">
                        <div className="column phone-button">
                          <OutboundLink className="contact-button level-item" href="tel:+6427 515 6058" rel="noreferrer noopener"><FontAwesomeIcon icon={['fas', 'phone']} rotation={90} className="icon-style" />027 515 6058</OutboundLink>
                        </div>                        
                        <div className="column mail-button">
                          <OutboundLink className="contact-button level-item" href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top"><FontAwesomeIcon icon={['fas', 'envelope']} className="icon-style" />  info@taniko.co.nz</OutboundLink>
                        </div>
                      </div>
                </div>

                <section className="has-text-centered">
                    <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                      <div className="contact-spacing">
                        <form action="https://getform.io/f/faa4e5b2-0bf7-43a4-828d-f5bce25bdfd3" method="POST">   
                            <div className="block">
                              <label className="label label-style">Full Name<span className="text-is-red">*</span>
                                <input className="input input-style" type="text" name="Full Name" id="Full Name"required="required"/>
                              </label>
                            </div>

                            <div className="block">
                              <label className="label label-style">Phone<span className="text-is-red">*</span>
                                <input className="input input-style" type="text" name="Phone" id="Phone" required="required"></input>
                              </label>
                            </div>

                            <div className="block">
                              <label className="label label-style">Email<span className="text-is-red">*</span>
                                <input className="input input-style" type="email" name="Email" id="Email" required="required"/>
                              </label>
                            </div>

                            <div className="block">
                                <label className="label label-style">Message<span className="text-is-red">*</span>
                                  <textarea className="textarea input-style" rows="5" name="Message" id="Message" required="required"></textarea>
                                </label>
                            </div>
                            <button className="button-style" type="submit">Send</button>
                        </form>
{/*                         
                        <div className="section people-spacing">
            <h2 className="h2">Ngā Kaimahi <br /> Our Tāniko People</h2>
            <hr className="red-line-title" />

            <div className="columns">
                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src="" alt="Pāora Puru" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Pāora Puru</h2>
                                    <p className="name-wrapper-subtitle">Te Ngākau</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fas', 'envelope']} />
                                    </OutboundLink>
                                    <OutboundLink href="https://www.linkedin.com/in/paul-puru-208ab5164/" rel="noreferrer noopener" target="_blank">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'linkedin']} />
                                    </OutboundLink>
                                </div>
                            </div>
                            <ul className="name-wrapper-pepeha">
                                <li>Ko Maungawhau te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Te Mānukanuka 0 Hoturoa te moana</li>
                                <li>Ko Tainui te waka</li>
                                <li>Ko Ngāti Te Ata Waiohua te iwi</li>
                                <li>Ko Te Ata-i-Rehia te tupuna</li>
                                <li>Ko Te Huakaiwaka te rangatira</li>
                            </ul>
                            <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Māori Policy</li>
                                <li>Māori Strategy</li>
                                <li>Treaty Settlements</li>
                                <li>Māori Relationships and Engagement</li>
                            </ul>
                            <p className="name-wrapper-description">Pāora has a passion for Māori development, advocating for Māori to access greater economic opportunities to aid and support whānau, hapū <br /> and iwi prosperity.</p>
                        </div>
                    </div>
                </div>

                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src="" alt="Aiedy Di" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Aiedy Di</h2>
                                    <p className="name-wrapper-subtitle">Te Tinana</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fas', 'envelope']} />
                                    </OutboundLink>
                                    <OutboundLink href="https://www.linkedin.com/in/aiedy-di/" rel="noreferrer noopener" target="_blank">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'linkedin']} />
                                    </OutboundLink>
                                </div>
                            </div>
                            <ul className="name-wrapper-pepeha">
                                <li>Ko Língshān te maunga</li>
                                <li>Ko Yongding te awa</li>
                                <li>Ko Shí Fâng te waka</li>
                                <li>Ko Beijing Ren te iwi</li>
                                <li>Ko Di tōku whānau</li>
                            </ul>
                            <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Procurement Strategies</li>
                                <li>Business Case</li>
                                <li>Development</li>
                                <li>IT systems design and implementation</li>
                            </ul>
                            <p className="name-wrapper-description">Aiedy has worked in the procurement industry for over 6 years and has a Bcom, MCIPS and current Chairman of the CIPS Auckland Committee.</p>
                        </div>
                    </div>
                </div>

                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src="" alt="Maxim Wehi" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Maxim Wehi</h2>
                                    <p className="name-wrapper-subtitle">Te Ihomatua</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="mailto:info@taniko.co.nz?Subject=General%20Enquiry" rel="noreferrer noopener" target="_top">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fas', 'envelope']} />
                                    </OutboundLink>
                                    <OutboundLink href="https://www.linkedin.com/in/maxim-wehi-715339142/" rel="noreferrer noopener" target="_blank">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'linkedin']} />
                                    </OutboundLink>
                                </div>
                            </div>
                            <ul className="name-wrapper-pepeha">
                                <li>Ko Matītī te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Tānewhirinaki te whare nui</li>
                                <li>Ko Opekerau te marae</li>
                                <li>Ko Matātua te waka</li>
                                <li>Ko Ngāti Ira te hapū</li>
                                <li>Ko Whakatohea te iwi</li>
                            </ul>
                            <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Construction</li>
                                <li>Project Management</li>
                                <li>Design</li>
                                <li>Creativity</li>
                            </ul>
                            <p className="name-wrapper-description">Maxim has spent most of his professional career in construction and is a qualified carpenter and project manager.</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div> */}
                      </div>
                </section>
        </Layout>
    )
}

export default contactPage
