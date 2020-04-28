import React from 'react'
import Layout from '../components/layout'
import '../styles/mystyles.scss'
import Logo from '../images/logo-white.svg'
import { Link } from 'gatsby'

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <section className="hero">
                <div className="hero-body">
                    {/* <img className="" src={Logo} alt="Taniko Logo" width="500" height="500" /> */}
                    <div className="has-text-centered translation" data-hover="The tapestry of understanding cannot be woven by one strand alone, but only by the working together of weavers will such a tapestry be completed.">
                        <i>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</i>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage
