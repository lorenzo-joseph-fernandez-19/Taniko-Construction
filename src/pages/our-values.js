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
      
        {/* <div className="section">
            <div className="columns">
                <div className="column">
                    <div className="logo-center">
                        <img src={Atua} width="300" height="300" alt="Mauri Atua"/>
                    </div>
                        <h2 className="mahi-title">Mauri Atua</h2>
                        <p className="mahi-subtitle">Spiritual Life Essence</p>
                </div>

                <div className="column values-spacing">
                    <div className="logo-center">
                        <img src={Whenua} width="300" height="300" alt="Mauri Whenua"/>
                    </div>
                        <h2 className="mahi-title">Mauri Whenua</h2>
                        <p className="mahi-subtitle">Environmental Life Essence</p>
                </div>

                <div className="column values-spacing">
                    <div className="logo-center">
                        <img src={Tangata} width="300" height="300" alt="Mauri Tangata"/>
                    </div>
                        <h2 className="mahi-title">Mauri Tangata</h2>
                        <p className="mahi-subtitle">People Life Essence</p>
                </div>
            </div>
        </div>
        <div className="section mahi-spacing">
                <div className="index-text values-spacing content">
                    <p>The Aronui symbol also talks to Tāniko as a business entity through its 3-pointed triangle design. The top triangle is Mauri Atua, with the koru in a vertical position, representing the natural/supernatural relationship. The left triangle is Mauri Whenua, with the koru laying horizontal, representing layers of earth going deep into the ground. The right triangle is Mauri Tangata, with two koru curling towards each other, symbolising growth and connection together. The empty triangle in the centre of the motif represents unlimited potential.</p>
                    <p>These three forms of relationships are interconnected, and determine who Māori are. The guiding principle within these relationships is ‘mauri’ which means, ‘life-force, life essence and soul. Mauri emanates from the creation and conception of time. Mauri holds a central place to inform Māori, how and why their lives take the form they do. It imbues Māori thinking, knowledge, culture and values with a unique cultural heartbeat and rhythm. </p>
                    <p>In a Māori worldview everything has mauri; the trees, the birds, the oceans, the winds, the mountains, the land, the moon, the stars, the sun and all humans have mauri. Mauri is the inner activity that moves within us like the wairua (spirit) and is not located in any organ of the body. Mauri is the very thing that gives and breathes life into our wellbeing, our existence. When a human has a consciousness of the mauri, they understand their role and responsibilities within an interconnected holistic Māori worldview. </p>
                </div>
            </div> */}
        
        <div className="section has-text-centered">
            <p className="index-text">Tāniko sets out to achieve its vision and purpose through the following Māori values:</p>
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
                    <h2 className="values-title">Rangitiranga</h2>
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