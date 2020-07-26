import React from 'react'
import Layout from '../components/layout'

const whoWeAre = () => {
    return (
        <Layout pageMeta={{
            title: "Who We Are",
            keywords: ["tāniko group"],
            description: "Tāniko"
        }}>
            <div className="who-hero-image">
                <h2 className="img-text">Who We Are</h2>
            </div>
            <div className="section">
                <div className="index-text content">
                    <p>Tāniko means, ‘to finger weave and/or an embroider, and is a traditional Māori variation of twining (whatu). The skills used to weave the colourful intricate borders of korowai Māori (cloaks). Tāniko designs are informed by cultural narratives on how Māori articulate their heritage, stories, culture, traditions, values and their physical and spiritual connections to the natural environment, known as te taiao. Tāniko patterns symbolize powerful reminders to the past which weave into the present, resulting in a platform for a sustainable future.</p> 
                    <p>The conceptual idea of Tāniko is that as a business, we interweave our collective threads together with the threads of our partners; to elevate the collective potential and shared mana (inherited strength and spiritual power), towards the pathway to Te Angitū, collective success.</p>
                </div>
            </div>
        </Layout>
    )
}

export default whoWeAre