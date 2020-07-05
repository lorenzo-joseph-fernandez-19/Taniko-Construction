import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import Paora from '../images/paora.jpg'
import Aiedy from '../images/aiedy.jpg'
import Maxim from '../images/maxim.jpg'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Weaving a collective future",
            keywords: ["maori enablement consultants, taniko, "],
            description: "Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice."
        }}>
        <div>
          {typeof window !== 'undefined' && <Slider />}
        </div>

        <div className="index-spacing">
            <div className="section">
                <h2 className="h2">Who We Are</h2>
                <hr className="red-line-title" />
                    <div className="index-text content">
                        <p>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.</p>
                        <p>The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations.</p>
                    </div>
            </div>
        </div>
    
        <div className="section is-medium background-img">
            <div className="translation translation-spacing has-text-centered" data-hover="With the red and black threads, the work will be completed."> 
                <p>Mā whero, mā pango, ka oti ai te mahi</p>
            </div>
        </div>

        <div className="index-spacing">
            <div className="index-text section">
                <p>The above proverb is a powerful metaphor for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
            </div>
        </div>

        <div className="people-spacing">
            <h2 className="h2">Ngā Kaimahi <br /> Our Tāniko People</h2>
            <hr className="red-line-title" />

            <div className="columns">
                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src={Paora} alt="Pāora Puru" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Pāora Puru</h2>
                                    <p className="name-wrapper-subtitle">Te Ngākau</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
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
                        <img className="people-image" src={Aiedy} alt="Aiedy Di" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Aiedy Di</h2>
                                    <p className="name-wrapper-subtitle">Te Tinana</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
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
                        <img className="people-image" src={Maxim} alt="Maxim Wehi" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Maxim Wehi</h2>
                                    <p className="name-wrapper-subtitle">Te Ihomatua</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
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
        </div>
            
        <div className="section is-medium background-img">
            <div className="translation translation-spacing has-text-centered" data-hover="What is the most important thing in this world, it is people, it is people, it is people.">
                <p>He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</p>
            </div>
        </div>

            <div className="section is-medium has-text-centered">
                <h2 className="h2">Our Clients</h2>
                <hr className="red-line-title" />
            </div>

            <div className="section is-medium background-img">
                <div className="translation-spacing translation has-text-centered" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                    <p>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</p>
                </div>
            </div>

            <div className="section is-medium">
                <h2 className="h2">Ready to work with us?</h2>
                <div className="centered">
                    <Link to="/contact"><button>Get in Touch</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage