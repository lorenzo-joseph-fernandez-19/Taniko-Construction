import React from "react"
import Layout from "../components/layout"

const ourValues = () => {
    return (
        <Layout pageMeta={{
            title: "Our Values",
            keywords: ["rangitiranga, tika, auahatanga, tāniko"],
            description: "Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice."
        }}>
        <div className="section">
            <h2 className="h2">Our Values</h2>
            <hr className="red-line-title" />
        </div>
        <div className="section mahi-spacing">
            <div className="columns">
                <div className="column values-spacing">
                    <h2 className="values-title">Rangitiranga</h2>
                    <hr className="values-line" />
                    <p className="values-subtitle">Leadership, Independence & Self-Determination</p>
                    <p className="values-text">We lead ourselves and others, enhancing self-efficacy.</p>
                </div>
                <div className="column values-spacing">
                <h2 className="values-title">Tika</h2>
                    <hr className="values-line" />
                    <p className="values-subtitle">Righteousness, Being Correct & Doing the Right Thing</p>
                    <p className="values-text">We are professional and we always do what is right, and correct.</p>
                </div>
                <div className="column values-spacing">
                <h2 className="values-title">Auahatanga</h2>
                    <hr className="values-line" />
                    <p className="values-subtitle">Innovation & Creativity</p>
                    <p className="values-text">We turn creative and innovative solutions into reality.</p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ourValues