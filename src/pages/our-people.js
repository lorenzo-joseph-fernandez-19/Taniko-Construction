import React from 'react'
import Layout from '../components/layout'


const ourTeam = () => {
    return (
        <Layout pageMeta={{
            title: "Our People",
            keywords: ["construction"],
            description: "Taniko Group People"
        }}>
            <section className="section is-medium">
                <h1>Our People</h1>
                <hr className="red-line" />
                <div className="columns">
                    <div className="column people-column-style">
                        <img className="people-image" src="" alt="Paora Puru"  />
                    </div>
                    <div className="column people-column-style">
                        <img className="people-image" src="" alt="Aiedy Di" />
                    </div>
                    <div className="column people-column-style">
                        <img className="people-image" src="" alt="Maxim Wehi" />
                    </div>
                </div>
                    <div className="has-text-centered">
                        <i className="maori-proverb">He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</i> <br />
                        <i className="translation">What is the most important thing in this world, it is people, it is people, it is people.</i>
                    </div>
            </section>
        </Layout>
    )
}

export default ourTeam