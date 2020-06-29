import React from 'react'
import Layout from '../components/layout'
import Slider from '../components/mahi-slider'

const ourMahi = () => {
    return (
        <Layout pageMeta={{
            title: "Our Mahi",
            keywords: ["construction"],
            description: "Tāniko will deliver tailored consultancy services to your business. Our outcomes are linked to the core principles of the Tāniko system."
        }}>
        <div>
          {typeof window !== 'undefined' && <Slider />}
        </div>
        </Layout>
    )
}

export default ourMahi