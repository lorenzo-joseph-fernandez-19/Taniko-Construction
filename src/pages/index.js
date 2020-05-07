import React from 'react'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
        <div>
          {typeof window !== 'undefined' && <Slider />}
        </div>
        <hr></hr>
                    {/* <div className="translation" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                        <i>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</i>
                    </div> */}
    
        </Layout>
    )
}

export default HomePage