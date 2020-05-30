import React from 'react'
import Layout from '../components/layout'
import Maxim from '../images/people.jpg'

const maximWehi = () => {
    return (
        <Layout pageMeta={{
            title: "Maxim Wehi",
            keywords: ["construction"],
            description: "Taniko Group People"
        }}>
            <section className="section is-medium">
                <h1>Maxim Wehi</h1>
                <hr className="red-line" />
                <div className="columns"> 
                    <div className="column people-column-style">
                        <img className="people-image" src={Maxim} alt="Maxim-Wehi" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default maximWehi