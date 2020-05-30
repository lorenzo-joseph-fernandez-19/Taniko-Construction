import React from 'react'
import Layout from '../components/layout'
import Aiedy from '../images/people.jpg'

const aiedyDi = () => {
    return (
        <Layout pageMeta={{
            title: "Aiedy Di",
            keywords: ["construction"],
            description: "Taniko Group People"
        }}>
            <section className="section is-medium">
                <h1>Aiedy Di</h1>
                <hr className="red-line" />
                <div className="columns">
                   
                    <div className="column people-column-style">
                        <img className="people-image" src={Aiedy} alt="Aiedy Di" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default aiedyDi