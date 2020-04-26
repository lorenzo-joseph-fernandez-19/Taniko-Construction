import React from 'react'
import Footer from '../components/footer'
import '../styles/mystyles.scss'
import Logo from '../images/logo-white.svg'


const HomePage = () => {
    return (
        // <Layout pageMeta={{
        //     title: "Home",
        //     keywords: ["construction"],
        //     description: "Taniko Construction"
        // }}>
            <section className="hero-body is-fullheight media">
                <div className="media-content">
                    <img src={Logo} alt="Taniko Logo" /> 
                </div>
                <div className="container has-text-centered text-style" data-hover="Weaving is not a single strand of weaving, but through the weaving of the weavers, this mattress is completed.">
                    <p>E kore e taea whenu kotahi te whāriki te raranga, heoi anō, mā te mahi ngātahi o ngā kairaranga, ka oti ai tēnei whāriki</p>
                </div>
            </section>
    )
}

export default HomePage
