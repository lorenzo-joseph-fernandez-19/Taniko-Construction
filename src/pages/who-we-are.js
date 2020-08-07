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
                    <p>Tāniko means “to finger weave and or an embroider” which is a traditional Māori variation of twining. Tāniko designs are informed by cultural narratives on how Māori articulate their stories, culture, traditions, values and their spiritual and physical connections to the natural environment, Te Taiao. Tāniko patterns symbolize powerful reminders to the past which weave into the present, resulting in a platform for a sustainable future.</p>
                    <p>The conceptual idea of Tāniko is that as a Māori enablement collective we interweave our collective threads together with the treads of our partners; to elevate the collective potential and shared mana (inherited strength and spiritual power) towards the pathway of Te Angitū, collective success.</p>
                </div>
            </div>
        </Layout>
    )
}

export default whoWeAre