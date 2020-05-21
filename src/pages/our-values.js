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
                <h1>Our Values</h1>
                <hr className="red-line-title" />
                <p id="space" className="has-text-white is-size-4">Taniko is guided by the following core values:</p>
                {/* <div className="columns has-text-white"> */}
                    <div className="section is-medium box-style-black">
                        <h2 className="is-red is-size-1">Rangatiratanga</h2>
                        <i className="values-subtitle">Leadership, Independence and Self-Determination.</i>
                        <p className="values-text">We lead ourselves and others, enhancing self-efficacy.</p>
                    </div>
                    <div className="section is-fullwidth box-style">
                        <h2 className="is-red is-size-1">Tika</h2>
                        <i className="values-subtitle">Righteousness, Being Correct and Doing the Right Thing.</i>
                        <p className="values-text">We are professional and we always do what is right, and correct.</p>
                    </div>
                    <div className="section is-medium box-style-black">
                        <h2 className="is-red is-size-1">Auahatanga</h2>
                        <i className="values-subtitle">Innovation and Creativity</i>
                        <p className="values-text">We turn creative and innovative solutions into reality.</p>
                    </div>
                {/* </div> */}
            </section>
            
        </Layout>
    )
}

export default About