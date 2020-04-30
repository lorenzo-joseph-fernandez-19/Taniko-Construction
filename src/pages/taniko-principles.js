import React from 'react'
import Layout from '../components/layout'
import MauriAtua from '../images/mauri-atua.svg'
import MauriWhenua from '../images/mauri-whenua.svg'
import MauriTangata from '../images/mauri-tangata.svg'

const mauriAtua = () => {
    return (
        <Layout pageMeta={{
            title: "Our Values",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero">
                <h1 className="title section">Our Values</h1>
                <div className="section">
                    <div className="hero-body columns">
                        <div className="column is-5">
                            <div className="content">
                                <img className="media-content" src={MauriAtua} width="400" height="400" />
                            </div>
                        </div>
                        <div className="column is-offset-1 is-6 has-text-centered">
                            <p className="title ">We acknowledge the spiritual essence that is intrinsically linked to everything that lives.</p>
                            <div className="translation" data-hover="While the land remains, people disappear.">
                                <i>Toitū te whenua, whatu ngarongaro te tangata.</i>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="hero section">
                    <div className="columns">
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
                </div>

                <div className="hero section">
                    <div className="columns">
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
                </div>
            </section>
        </Layout>
    )
}

export default mauriAtua