import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import People from '../images/people.jpg'

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
                <h1>Who We Are</h1>
                <hr className="red-line-title" />
                    <div className="index-text content">
                        <p>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.</p>
                        <p>The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations.</p>
                    </div>
            </div>
        </div>
    

            <div className="section translation has-text-centered has-background-black" data-hover="With the red and black threads, the work will be completed."> 
                <i>"Mā whero, mā pango, ka oti ai te mahi"</i>
            </div>


        <div className="index-spacing">
            <div className="index-text section">
                <p>The above proverb is a powerful metaphor for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
            </div>
        </div>

        <div className="section has-text-centered index-spacing">
                <h1>Our Values</h1>
                <hr className="red-line-title" />
                <p id="space" className="has-text-black is-size-4">Taniko is guided by the following core values:</p>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className="values-title">Rangatiratanga</h2>
                            <p className="values-subtitle">Leadership, Independence and Self-Determination.</p>
                        </div>
                        <div className="column">
                            <p className="values-text">We lead ourselves and others, enhancing self-efficacy.</p>
                        </div>
                    </div>

                    <div className="columns"> 
                        <div className="column">
                            <h2 className="values-title">Tika</h2>
                            <p className="values-subtitle">Righteousness, Being Correct and Doing the Right Thing.</p>
                        </div>
                        <div className="column">
                            <p className="values-text">We are professional and we always do what is right, and correct.</p>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <h2 className="values-title">Auahatanga</h2>
                            <p className="values-subtitle">Innovation and Creativity</p>
                        </div>
                        <div className="column">
                            <p className="values-text">We turn creative and innovative solutions into reality.</p>
                        </div>
                    </div>
                </div>
        </div>


        <div className="section people-spacing">
            <h1>Our People</h1>
            <hr className="red-line-title" />

            
            {/* <div className="translation has-text-centered" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                <i>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</i>
            </div> */}

            <div className="columns">
                <div className="column people-column-style">
                    <div className="name-wrapper">
                        <img className="people-image" src={People} alt="Paora Puru" width="400" height="400" />
                        <div className="name-wrapper-inner">
                            <h2 className="name-wrapper-title">Paora Puru</h2>
                            <p className="name-wrapper-subtitle">Te Ngākau</p>
                            <p className="name-wrapper-description">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere. The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management. </p>
                            <i className="name-wrapper-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</i>
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
                            <h2 className="name-wrapper-title">Aiedy Di</h2>
                            <p className="name-wrapper-subtitle">Te Tinana</p>
                            <p className="name-wrapper-description">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere. The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management. </p>
                            <i className="name-wrapper-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</i>
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
                            <div className="name-wrapper-text-position">
                            <h2 className="name-wrapper-title">Maxim Wehi</h2>
                            <p className="name-wrapper-subtitle">Te Ihomatua</p>
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
        </div>
            
        <div className="background-img">
            <div className="section is-medium translation has-text-centered" data-hover="What is the most important thing in this world, it is people, it is people, it is people.">
                <i>He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</i>
            </div>
        </div>

            <div className="section is-medium has-text-centered">
                <h1>Our Clients</h1>
                <hr className="red-line-title" />
            </div>

            <div className="section is-medium has-background-black">
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