import React from 'react'
import Layout from '../components/layout'

const thankYou = () => {
    return (
        <Layout pageMeta={{
            title: "Thank You",
            keywords: ["tāniko group"],
            description: "Thanks for getting in touch! Our team will get back to you as soon as they can."
        }}>
            <section className="section is-medium">
                <div className="thank-you-spacing has-text-centered">
                    <h2 className="thank-you-title">Thanks for getting in touch!</h2>
                    <p className="thank-you-text">Our team will get back to you as soon as they can.</p> 
                </div>
            </section>
        </Layout>
    )
}

export default thankYou