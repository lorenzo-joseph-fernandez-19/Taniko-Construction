import React from 'react'
import Layout from '../components/layout'

const whoWeAre = () => {
    return (
        <Layout pageMeta={{
            title: "Who We Are",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-large has-text-centered has-background-white">
                <h1 className="is-size-1 has-text-black">Who We Are</h1> 
            </section>
        </Layout>
    )
}

export default whoWeAre