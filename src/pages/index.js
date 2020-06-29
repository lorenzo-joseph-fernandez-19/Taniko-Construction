import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import People from '../images/people.jpg'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["construction"],
            description: "Taniko Group"
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
                <i>"Mā whero, mā pango, ka oti ai te mahi"</i>
            </div>
        </div>

        <div className="index-spacing">
            <div className="index-text section">
                <p>The above proverb is a powerful metaphor for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
            </div>
        </div>

        <div className="section people-spacing">
            <h2 className="h2">Our People</h2>
            <hr className="red-line-title" />

            <div className="columns">
                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src={People} alt="Paora Puru" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="name-wrapper-title">Paora Puru</h2>
                                    <p className="name-wrapper-subtitle">Te Ngākau</p>
                                </div>
                                <div className="column">
                                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fas', 'envelope']} />
                                    </OutboundLink>
                                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                                        <FontAwesomeIcon className="icon icon-style is-medium" icon={['fab', 'linkedin']} />
                                    </OutboundLink>
                                </div>
                            </div>
                            <p className="name-wrapper-description">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere. The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management. </p>
                            <p className="name-wrapper-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</p>
                            <p className="name-wrapper-description">He is married with two children and lives on a lifestyle block near Clevedon.</p>
                            <ul className="name-wrapper-pepeha">
                                <li>Ko Matītī te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Tānewhirinaki te whare nui</li>
                                <li>Ko Opekerau te marae</li>
                                <li>Ko Ngati Ira te hapū</li>
                                <li>Ko Wehi te whanau</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src={People} alt="Aiedy Di" width="400" height="400" />
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
                                <p className="name-wrapper-description">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere. The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management. </p>
                                <p className="name-wrapper-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</p>
                                <p className="name-wrapper-description">He is married with two children and lives on a lifestyle block near Clevedon.</p>
                                <ul className="name-wrapper-pepeha">
                                    <li>Ko Matītī te maunga</li>
                                    <li>Ko Waioeka te awa</li>
                                    <li>Ko Tānewhirinaki te whare nui</li>
                                    <li>Ko Opekerau te marae</li>
                                    <li>Ko Ngati Ira te hapū</li>
                                    <li>Ko Wehi te whanau</li>
                                </ul>
                        </div>
                    </div>
                </div>


                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src={People} alt="Maxim Wehi" width="400" height="400" />
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

                            <p className="name-wrapper-description">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere. The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management. </p>
                            <p className="name-wrapper-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</p>
                            <p className="name-wrapper-description">He is married with two children and lives on a lifestyle block near Clevedon.</p>
                            <ul className="name-wrapper-pepeha">
                                <li>Ko Matītī te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Tānewhirinaki te whare nui</li>
                                <li>Ko Opekerau te marae</li>
                                <li>Ko Ngati Ira te hapū</li>
                                <li>Ko Wehi te whanau</li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
            
        <div className="section is-medium background-img">
            <div className="translation translation-spacing has-text-centered" data-hover="What is the most important thing in this world, it is people, it is people, it is people.">
                <i>He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</i>
            </div>
        </div>

            <div className="section is-medium has-text-centered">
                <h2 className="h2">Our Clients</h2>
                <hr className="red-line-title" />
            </div>

            <div className="section is-medium background-img">
                <div className="translation-spacing translation has-text-centered" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                    <i>"E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki"</i>
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