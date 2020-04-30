import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Our Clients",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
          <section className="section is-large has-text-centered has-background-white">
                <h1 className="is-size-1 has-text-black">Contact Us</h1> 
            </section>
        </Layout>
    )
}

export default contactPage