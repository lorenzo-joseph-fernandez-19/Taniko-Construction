import React from 'react'
import Layout from '../components/layout'
import Atua from '../images/mauri-atua_black.svg'
import Whenua from '../images/mauri-whenua_black.svg'
import Tangata from '../images/mauri-tangata_black.svg'

const ourMahi = () => {
    return (
        <Layout pageMeta={{
            title: "Our Mahi",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
        <section className="section is-medium">
           <h1>Our Mahi</h1>
            <hr className="red-line-title" />
            <p id="space" className="has-text-black is-size-4 has-text-centered">Tāniko will deliver tailored consultancy services to your business. <br /> Our outcomes are linked to the core principles of the Tāniko system.</p>
            <div className="columns mahi-spacing">
                <div className="column is-half mahi-image">
                    <img src={Atua} alt="Mauri Atua Triangle" width="425" height="425" />
                </div>
                <div className="column is-half">
                    <h2 className="mahi-title">Mauri Atua</h2>
                        <p className="mahi-subtitle">Spiritual Life Essence</p>
                        <ul className="mahi-text">
                            <li>Applying a Māori worldview and knowledge to your business philosophy.</li>
                            <li>Indigenisation strategies that inform innovation.</li>
                            <li>Activating Māori design and knowledge to your built environment.</li>
                        </ul>
                </div>
            </div>

            <div className="columns mahi-spacing">
                <div className="column is-half mahi-image">
                    <img src={Whenua} alt="Mauri Whenua Triangle" width="450" height="450" />
                </div>
                <div className="column is-half">
                    <h2 className="mahi-title">Mauri Whenua</h2>
                        <p className="mahi-subtitle">Environmental Life Essence</p>
                        <ul className="mahi-text">
                            <li>Interaction with local Māori with education on the land you stand on.</li>
                            <li>Optimising your approach to sustainability through a Māori worldview.</li>
                        </ul>
                </div>
            </div>

            <div className="columns mahi-spacing">
                <div className="column is-half mahi-image">
                    <img src={Tangata} alt="Mauri Tangata Triangle" width="450" height="450" />
                </div>
                <div className="column is-half">
                    <h2 className="mahi-title">Mauri Tangata</h2>
                        <p className="mahi-subtitle">People Life Essence</p>
                        <ul className="mahi-text">
                            <li>Utilizing a relevant Māori supply chain in your business and measuring the impact your support has on local māori aspirations.</li>
                            <li>Implementing a cultural induction and internship program for your business.</li>
                        </ul>
                </div>
            </div>
        </section>
        </Layout>
    )
}

export default ourMahi