import React from 'react'
import Layout from '../components/layout'

const ourServices = () => {
    return (
        <Layout pageMeta={{
            title: "Who We Are",
            keywords: ["tāniko group"],
            description: "Tāniko"
        }}>
            <div className="services-hero-image">
                    <h2 className="img-text">Our Services</h2>
            </div>
            <div className="section has-text-centered">
                <p className="index-text">Tāniko will meet with you to discuss your cultural elevation pathways.</p>
                <p className="index-text">Tāniko can offer you the following enablement tools: </p>
            </div>
                <div className="mahi-spacing">
            <div className="columns is-multiline">
            <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Cultural Capability Pathways</h2>
                    <p className="values-text">Equipping your business with an understanding and appreciation for a Māori world view.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Project Management</h2>
                    <p className="values-text">Tāniko can lead projects on your behalf.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                    <h2 className="values-title">Procurement and Marketing Engagement</h2>
                    <p className="values-text">Tāniko will lead procurement and tender submissions.</p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ourServices