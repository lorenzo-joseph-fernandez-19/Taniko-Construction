import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import Flax from '../images/flax.jpg'
import Grass from '../images/grass.jpg'
import Piha from '../images/piha.jpg'
import Muriwai from '../images/muriwai.jpg'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Weaving a collective future together",
            keywords: ["maori enablement consultants, tāniko group, professional consultancy group"],
            description: "Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice."
        }}>
        <div>
          {typeof window !== 'undefined' && <Slider />}
        </div>

        <div className="section columns is-multiline index-spacing">
            <div className="column is-6 centered">
                <div className="img-container">
                    <img className="img-styling" src={Muriwai} alt="Muriwai Beach" />
                    <p className="img-title">Who We Are</p>
                    <div className="overlay"></div>
                        <Link to="/who-we-are"><button className="img-button">Learn more</button></Link>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-container">
                    <img className="img-styling" src={Flax} alt="New Zealand Flax" />
                    <p className="img-title">Our Values</p>
                    <div className="overlay"></div>
                        <Link to="/our-values"><button className="img-button">Learn more</button></Link>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-container">
                    <img className="img-styling" src={Grass} alt="New Zealand Grass" />
                    <p className="img-title">Our Services</p>
                    <div className="overlay"></div>
                    <Link to="/our-services"><button className="img-button">Learn more</button></Link>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-container">
                    <img className="img-styling" src={Piha} alt="Piha Beach" />
                    <p className="img-title">Contact Us</p>
                    <div className="overlay"></div>
                    <Link to="/contact"><button className="img-button">Get in Touch</button></Link>
                </div>
            </div>


          
        </div>
            
        </Layout>
    )
}

export default HomePage