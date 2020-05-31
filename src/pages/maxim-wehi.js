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
             <div className="section is-medium has-background-black">
                <h1 className="has-text-white">Maxim Wehi</h1>
            </div>
            <section className="section people-spacing">
                <div className="columns"> 
                    <div className="column people-center">
                        <img className="people-image" src={Maxim} alt="Maxim-Wehi" />
                    </div>
                    <div className="column">
                        <div className="media-content">
                            <p className="people-text">Maxim’s family came to Auckland from Opotiki in the 1960’s, eventually settling in Mangere.  The wider Wehi whanau are well known for their exploits in kapa haka performing arts, a path Maxim followed to University, studying a  bachelors degree in Music. Maxim has spent most of his professional career in construction and is a qualified carpenter. He also completed a graduate diploma in Construction Project Management.</p>
                            <p className="people-quote">“Building taught me to think methodically, Music taught me to think creatively, an awesome mix for innovation, problem solving and getting things done.”</p>
                            <p className="people-text">He is married with two children and lives on a lifestyle block near Clevedon.</p>
                            <p className="people-quote">Ko Matītī te maunga <br />
                            Ko Waioeka te awa <br />
                            Ko Tānewhirinaki te whare nui <br />
                            Ko Opekerau te marae <br />
                            Ko Ngati Ira te hapū <br />
                            Ko Wehi te whanau</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default maximWehi