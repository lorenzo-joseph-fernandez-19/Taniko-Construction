import React from 'react'
import Layout from '../components/layout'

const thankYou = () => {
    return (
        <Layout pageMeta={{
            title: "Thank You",
            keywords: ["construction"],
            description: "Taniko Group"
        }}>
            <section className="section is-medium">
                <h1>Thank you for your message. We'll be in touch</h1>
            </section>
        </Layout>
    )
}

export default thankYou