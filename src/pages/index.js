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
            description: "Taniko Construction"
        }}>
        <div>
          {typeof window !== 'undefined' && <Slider />}
        </div>

        <div className="section">
            <h1>Who We Are</h1>
            <hr className="red-line-title" />
                    <div className="privacy-text contact-spacing content">
                        <p>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.</p>
                        <p>The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations.</p>
                    </div>
        </div>
        <div className="section">
            <i className="maori-proverb">Mā whero, mā pango, ka oti ai te mahi</i> <br />
            <i className="translation">With the red and black threads, the work will be completed.</i>
        </div>
        <div className="privacy-text contact-spacing section">
            <p>The above proverb is a powerful metaphor  for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
        </div>
        <div className="section">
        <h1>Our People</h1>
            <hr className="red-line" />
            <div className="columns">
                <div className="column people-column-style image-container">
                    <Link to="/paora-puru"><img className="image-overlay people-image" src={People} alt="Paora Puru"  /></Link>
                    <div className="footer-item">
                        <p>Paora</p>
                    </div>
                        <div class="overlay">
                            <div class="overlay-text">Paora Puru</div>
                            <Link to="/contact"><button>Read more</button></Link>
                        </div>
                </div>
                <div className="column people-column-style">
                    <Link to="/aiedy-di"><img className="people-image" src={People} alt="Aiedy Di" /></Link>
                </div>
                <div className="column people-column-style">
                    <Link to="/maxim-wehi"><img className="people-image" src={People} alt="Maxim Wehi" /></Link>
                </div>
            </div>
                <div className="section is-medium has-text-centered">
                    <i className="maori-proverb">He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</i> <br />
                    <i className="translation">What is the most important thing in this world, it is people, it is people, it is people.</i>
                </div>
        </div>
        <div className="section is-small">
            <h2 className="h2">Ready to work with us?</h2>
            <div className="centered">
                <Link to="/contact"><button>Get in Touch</button></Link>
            </div>
        </div>
            {/* <div className="translation has-text-centered" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                <i>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</i>
            </div> */}
        </Layout>
    )
}

export default HomePage