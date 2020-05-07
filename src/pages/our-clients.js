import React from 'react'
import Layout from '../components/layout'

const Clients = () => {
    return (
        <Layout pageMeta={{
            title: "Our Clients",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-large has-text-centered">
                <h1 className="is-size-1 has-text-white">Our Clients</h1> 
            </section>
        </Layout>
    )
}

export default Clients