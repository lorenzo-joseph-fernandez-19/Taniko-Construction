import React from 'react'
import Layout from '../components/layout'

const whoWeAre = () => {
    return (
        <Layout pageMeta={{
            title: "Who We Are",
            keywords: ["tāniko group"],
            description: "Tāniko"
        }}>
            <div className="index-text">
            Tāniko means, ‘to finger weave and/or an embroider, and is a traditional Māori variation of twining (whatu). The skills used to weave the colourful intricate borders of korowai Māori (cloaks). Tāniko designs are informed by cultural narratives on how Māori articulate their heritage, stories, culture, traditions, values and their physical and spiritual connections to the natural environment, known as te taiao. Tāniko patterns symbolize powerful reminders to the past which weave into the present, resulting in a platform for a sustainable future. 
            The conceptual idea of Tāniko is that as a business, we interweave our collective threads together with the threads of our partners; to elevate the collective potential and shared mana (inherited strength and spiritual power), towards the pathway to Te Angitū, collective success. 
            </div>
            <div className="index-spacing">
            <div className="section">
                <h2 className="h2">Who We Are</h2>
                <hr className="red-line-title" />
                    <div className="index-text content">
                        <p>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.</p>
                        <p>The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations.</p>
                    </div>
        
                    <div className="translation translation-spacing" data-hover="With the red and black threads, the work will be completed"> 
                        <p>Mā whero, mā pango, ka oti ai te mahi</p>
                    </div>

                    <div className="index-text content">
                        <p>The above proverb is a powerful metaphor for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
                    </div>
            </div>
        </div>
        </Layout>
    )
}

export default whoWeAre