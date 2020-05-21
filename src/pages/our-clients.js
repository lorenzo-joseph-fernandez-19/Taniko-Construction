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
                <h1>Our Clients</h1>
                <hr className="red-line-title" />
            </section>
        </Layout>
    )
}

export default Clients