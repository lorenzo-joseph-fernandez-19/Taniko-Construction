import React from 'react'
import Layout from '../components/layout'

const thankYou = () => {
    return (
        <Layout pageMeta={{
            title: "Thank You",
            keywords: ["construction"],
            description: "Taniko Group"
        }}>
            <section className="section is-medium background-img">
                <div className="thank-you-spacing has-text-centered">
                    <h2 className="thank-you-title">Thanks for getting in touch!</h2>
                    <p className="thank-you-text">Our Team will get back to you in the next 2-3 business days.</p> 
                </div>
            </section>
        </Layout>
    )
}

export default thankYou