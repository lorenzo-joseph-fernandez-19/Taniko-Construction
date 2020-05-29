import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Slider from '../components/slider'
import People from '../images/people.jpg'

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
        <div className="section is-medium">
        <h1>Our People</h1>
            <hr className="red-line" />
            <div className="columns">
                <div className="column people-column-style">
                    <Link to="/"><img className="people-image" src={People} alt="Paora Puru"  /></Link>
                    <p>Hi</p>
                </div>
                <div className="column people-column-style">
                    <Link to="/"><img className="people-image" src={People} alt="Aiedy Di" /></Link>
                </div>
                <div className="column people-column-style">
                    <Link to="/"><img className="people-image" src={People} alt="Maxim Wehi" /></Link>
                </div>
                </div>
                <div className="section is-medium has-text-centered">
                    <i className="maori-proverb">He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata</i> <br />
                    <i className="translation">What is the most important thing in this world, it is people, it is people, it is people.</i>
                </div>
        </div>
        <div className="section is-small">
            <h2 className="h2">Ready to work with us?</h2>
            <div className="centered">
                <Link to="/contact"><button>Get in Touch</button></Link>
            </div>
        </div>
            {/* <div className="translation has-text-centered" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                <i>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</i>
            </div> */}
        </Layout>
    )
}

export default HomePage