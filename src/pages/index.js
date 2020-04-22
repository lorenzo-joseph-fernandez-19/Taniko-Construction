import React from 'react'
import Layout from '../components/layout'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="">
                <p>Home</p>
            </section>
        </Layout>
    )
}

export default HomePage
