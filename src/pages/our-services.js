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
            <div className="section index-text">
                <p>Tāniko will meet with you to discuss your cultural elevation pathways. Tāniko can offer you the following enablement tools: </p>            
            </div>
        </Layout>
    )
}

export default ourServices