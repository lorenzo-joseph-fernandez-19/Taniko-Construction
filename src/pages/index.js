import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import Image from '../images/homepage.jpg'

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
                <div className="img-module rounded">
                    <div className="img-text">
                        <h2>Who We Are</h2>
                        <Link to="/who-we-are"><button className="img-button">Learn more</button></Link>
                    </div>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-module rounded">
                    <div className="img-text">
                        <h2>Our Values</h2>
                        <Link to="/our-values"><button className="img-button">Learn more</button></Link>
                    </div>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-module rounded">
                    <div className="img-text">
                        <h2>Our Services</h2>
                        <Link to="/our-services"><button className="img-button">Learn more</button></Link>
                    </div>
                </div>
            </div>
            <div className="column is-6 centered">
                <div className="img-module rounded">
                    <div className="img-text">
                        <h2>Contact Us</h2>
                        <Link to="/contact"><button className="img-button">Get in Touch</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
            
        </Layout>
    )
}

export default HomePage