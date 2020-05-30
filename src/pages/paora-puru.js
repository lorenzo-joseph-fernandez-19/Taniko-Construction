import React from 'react'
import Layout from '../components/layout'
import Paora from '../images/people.jpg'

const paoraPuru = () => {
    return (
        <Layout pageMeta={{
            title: "Paora Puru",
            keywords: ["construction"],
            description: "Taniko Group People"
        }}>
            <section className="section is-medium">
                <h1>Paora Puru</h1>
                <hr className="red-line" />
                <div className="columns">
                    <div className="column people-column-style">
                        <img className="people-image" src={Paora} alt="Paora Puru" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default paoraPuru