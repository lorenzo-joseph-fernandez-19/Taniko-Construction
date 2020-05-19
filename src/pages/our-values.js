import React from 'react'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout pageMeta={{
            title: "Our Values",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-medium has-text-centered">
                <h1 className="is-size-1 has-text-white">Our Values</h1>
                <hr className="red-line" />
                <p id="space" className="has-text-white is-size-4">Taniko is guided by the following core values:</p>
                <div className="columns has-text-white">
                    <div className="column is-vcentered box-style">
                        <h2 className="is-red is-size-3">Rangatiratanga</h2>
                        <i>Leadership, Independence and Self-Determination.</i>
                        <p>We lead ourselves and others, enhancing self-efficacy.</p>
                    </div>
                    <div className="column is-vcentered box-style">
                        <h2 className="is-red is-size-3">Tika</h2>
                        <i>Righteousness, Being Correct and Doing the Right Thing.</i>
                        <p>We are professional and we always do what is right, and correct.</p>
                    </div>
                    <div className="column is-vcentered box-style">
                        <h2 className="is-red is-size-3">Auahatanga</h2>
                        <i>Innovation and Creativity</i>
                        <p>We turn creative and innovative solutions into reality.</p>
                    </div>
                </div>
            </section>
            
        </Layout>
    )
}

export default About