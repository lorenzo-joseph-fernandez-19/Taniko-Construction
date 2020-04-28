import React from 'react'
import Layout from '../components/layout'
import MauriAtua from '../images/mauri-atua.svg'

const mauriAtua = () => {
    return (
        <Layout pageMeta={{
            title: "Mauri Atua",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero is-large">
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
            </section>
        </Layout>
    )
}

export default mauriAtua