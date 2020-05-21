import React from 'react'
import Layout from '../components/layout'

const ourTeam = () => {
    return (
        <Layout pageMeta={{
            title: "Our Team",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-medium">
                <h1>Our Team</h1>
                <hr className="red-line" />
            </section>
        </Layout>
    )
}

export default ourTeam