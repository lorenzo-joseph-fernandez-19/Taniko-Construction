import React from 'react'
import Layout from '../components/layout'
import Atua from "../images/mauri-atua.svg"
import Whenua from "../images/mauri-whenua.svg"
import Tangata from "../images/mauri-tangata.svg"

const ourMahi = () => {
    return (
        <Layout pageMeta={{
            title: "Our Mahi",
            keywords: ["mauri atua, mauri whenua, mauri tangata, tāniko"],
            description: "Tāniko will deliver tailored consultancy services to your business. Our outcomes are linked to the core principles of the Tāniko system."
        }}>
        <div className="section">
            <h2 className="h2">Our Work</h2>
            <hr className="red-line-title" />
        </div>
        <div className="section mahi-spacing">
            <div className="columns">
                <div className="column values-spacing">
                    <div className="logo-center">
                        <img src={Atua} width="300" height="300" alt="Mauri Atua"/>
                    </div>
                        <h2 className="values-title">Mauri Atua</h2>
                        <hr className="values-line" />
                        <p className="values-subtitle">Spiritual Life Essence</p>
                        <p className="values-text">Applying a Māori worldview and knowledge to your business philosophy.</p>
                        <hr className="has-background-white" />
                        <p className="values-text">Indigenisation strategies that inform innovation.</p>
                        <hr className="has-background-white" />
                        <p className="values-text">Activating Māori design and knowledge to your built environment.</p>
                </div>

                <div className="column values-spacing">
                    <div className="logo-center">
                        <img src={Whenua} width="300" height="300" alt="Mauri Whenua"/>
                    </div>
                        <h2 className="values-title">Mauri Whenua</h2>
                        <hr className="values-line" />
                        <p className="values-subtitle">Environmental Life Essence</p>
                        <p className="values-text">Interaction with local Māori with education on the land you stand on.</p>
                        <hr className="has-background-white" />
                        <p className="values-text">Optimising your approach to sustainability through a Māori worldview.</p>
                </div>

                <div className="column values-spacing">
                    <div className="logo-center">
                        <img src={Tangata} width="300" height="300" alt="Mauri Tangata"/>
                    </div>
                        <h2 className="values-title">Mauri Tangata</h2>
                        <hr className="values-line" />
                        <p className="values-subtitle">People Life Essence</p>
                        <p className="values-text">Utilizing a relevant Māori supply chain in your business and measuring the impact your support has on local māori aspirations.</p>
                        <hr className="has-background-white" />
                        <p className="values-text">Implementing a cultural induction and internship program for your business.</p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ourMahi