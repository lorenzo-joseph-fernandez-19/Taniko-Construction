import React from 'react'
import Layout from '../components/layout'

const whoWeAre = () => {
    return (
        <Layout pageMeta={{
            title: "Who We Are",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="section is-medium">
                <h1>Who We Are</h1>
                <hr className="red-line-title" />
                    <div className="contact-spacing">
                        <div className="privacy-text content">
                            <p>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principals and make them relevant in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.</p>
                            <p>The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations.</p>
                            <div className="proverb-spacing">
                                <div className="has-text-left">
                                    <i className="maori-proverb">Mā whero, mā pango, ka oti ai te mahi</i> <br />
                                    <i className="translation">With the red and black threads, the work will be completed.</i>
                                </div>
                            </div>
                            <p>The above proverb is a powerful metaphor  for collaboration. Through principles of cooperation and inclusion the desired outcomes will be completed.</p>
                        </div>
                    </div>
            </section>
        </Layout>
    )
}

export default whoWeAre