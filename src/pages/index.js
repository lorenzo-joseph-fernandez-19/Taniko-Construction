import React from 'react'
import Layout from '../components/layout'
import '../styles/mystyles.scss'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero-body has-background-primary">

            </section>
        </Layout>
    )
}

export default HomePage
