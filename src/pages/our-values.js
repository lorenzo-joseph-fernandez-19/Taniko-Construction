import React from "react"
import Layout from "../components/layout"
// import Atua from "../images/mauri-atua.svg"
// import Whenua from "../images/mauri-whenua.svg"
// import Tangata from "../images/mauri-tangata.svg"

const ourValues = () => {
    return (
        <Layout pageMeta={{
            title: "Our Values",
            keywords: ["rangitiranga, tika, auahatanga, mauri atua, mauri whenua, mauri tangata"],
            description: "Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice."
        }}>
        <div className="values-hero-image">
            <h2 className="img-text">Our Values</h2>
        </div>
        
        <div className="section values-spacing">
            <p className="values-text">Tāniko sets out to achieve its vision and purpose through the following Māori values:</p>
        </div>
        <div className="mahi-spacing">
            <div className="columns is-multiline">
            <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Whanaungatanga</h2>
                    <p className="values-subtitle">Relationships | Connections </p>
                    <p className="values-text">We value the importance of relationships and we grow, develop and maintain meaningful relationships with people.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Manaakitanga</h2>
                    <p className="values-subtitle">Kindness | Generosity | Respect </p>
                    <p className="values-text">We care for and look after the Mana (inherited strength) of all people.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                    <h2 className="values-title">Rangatiratanga</h2>
                    <p className="values-subtitle">Leadership</p>
                    <p className="values-text">We aspire to lead by example, and we grow leadership in others.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Kotahitanga</h2>
                    <p className="values-subtitle">Unity | Collaboration | Solidarity</p>
                    <p className="values-text">We promote unity and we work in partnership, collaboration and solidarity.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Auahatanga</h2>
                    <p className="values-subtitle">Innovation | Creativity</p>
                    <p className="values-text">We turn creative and innovative solutions into reality.</p>
                </div>
                <div className="column is-one-third red-border values-spacing">
                <h2 className="values-title">Koungatanga</h2>
                    <p className="values-subtitle">Quality | Excellence</p>
                    <p className="values-text">We strive for excellence and we are quality driven.</p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ourValues