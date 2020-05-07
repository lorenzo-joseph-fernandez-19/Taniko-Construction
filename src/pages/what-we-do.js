import React from 'react'
import Layout from '../components/layout'

const whatWeDo = () => {
    return (
        <Layout pageMeta={{
            title: "What We Do",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-large has-text-centered">
                <h1 className="is-size-1 has-text-white">What We Do</h1> 
            </section>
        </Layout>
    )
}

export default whatWeDo