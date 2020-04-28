import React from 'react'
import Layout from '../components/layout'
import MauriWhenua from '../images/mauri-whenua.svg'

const mauriWhenua = () => {
    return (
        <Layout pageMeta={{
            title: "Mauri Whenua",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero is-large">
                <div className="hero-body columns">
                    <div className="column is-5">
                        <div className="content">
                            <img className="media-content" src={MauriWhenua} width="400" height="400" />
                        </div>
                    </div>
                    <div className="column is-offset-1 is-6 has-text-centered">
                        <p className="title">We care for and value the importance and sacredness of people.</p>
                        <div className="translation" data-hover="What is the most important thing in this world, it is people, it is people, it is people.">
                            <i>He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata.</i>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default mauriWhenua