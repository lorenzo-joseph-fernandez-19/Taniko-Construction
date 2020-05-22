import React from 'react'
import Layout from '../components/layout'
import People from '../images/photo.png'

const ourTeam = () => {
    return (
        <Layout pageMeta={{
            title: "Our Team",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-medium">
                <h1>Our People</h1>
                <hr className="red-line" />
                <p id="space" className="contact-subtitle contact-spacing">Send us a message and we'll get back to you as soon as we can.</p>
                <div className="columns">
                    <div className="column column-style">
                        <img src={People} alt="Paora Puru" />
                    </div>
                    <div className="column column-style">
                        <img src={People} alt="Aiedy Di" />
                    </div>
                    <div className="column column-style">
                        <img src={People} alt="Maxim Wehi" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ourTeam