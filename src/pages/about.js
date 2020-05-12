import React from 'react'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout pageMeta={{
            title: "About Us",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-medium has-text-centered">
                <h1 className="is-size-1 has-text-white">About Us</h1>
                <hr className="hr" />
            </section>
            
        </Layout>
    )
}

export default About