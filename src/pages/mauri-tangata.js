import React from 'react'
import Layout from '../components/layout'
import MauriTangata from '../images/mauri-tangata.svg'

const mauriTangata = () => {
    return (
        <Layout pageMeta={{
            title: "Mauri Tangata",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero is-large">
                <div className="hero-body columns">
                    <div className="column is-5">
                        <div className="content">
                            <img className="media-content" src={MauriTangata} width="400" height="400" />
                        </div>
                    </div>
                    <div className="column is-offset-1 is-6 has-text-centered">
                        <p className="title">We care for the life essence of our Earth Mother and all life that depends upon her.</p>
                        <div className="translation" data-hover="While the land remains, people disappear.">
                            <i>Toitū te whenua, whatu ngarongaro te tangata.</i>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default mauriTangata