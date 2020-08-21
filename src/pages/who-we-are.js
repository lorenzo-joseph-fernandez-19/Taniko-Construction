import React from 'react'
import Layout from '../components/layout'
import Aiedy from '../images/Aiedy.png'
import Paul from '../images/Paul.png'
import Maxim from '../images/Maxim.png'

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
                <h2 className="our-team-title">Our Team</h2>
                <div className="columns spacing">
                    <div className="column logo-center">
                        <img src={Aiedy} height='400' width='400' alt="Aiedy Di"></img>
                    </div>
                    <div className="column">
                    <h2 className="name-wrapper-title">Aiedy Di (Te Tinana)</h2>
                        <ul className="name-wrapper-pepeha">
                            <li>Ko Língshān te maunga</li>
                            <li>Ko Yongding te awa</li>
                            <li>Ko Shí Fâng te waka</li>
                            <li>Ko Beijing Ren te iwi</li>
                            <li>Ko Di tōku whānau</li>
                        </ul>
                        <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Procurement Strategies</li>
                                <li>Business Case</li>
                                <li>Development</li>
                                <li>IT systems design and implementation</li>
                            </ul>
                            <p className="name-wrapper-description">Aiedy has worked in the procurement industry for over 6 years and has a Bcom, MCIPS and current Chairman of the CIPS Auckland Committee.</p>
                    </div>
                </div>
                <div className="columns spacing">
                <div className="column logo-center">
                        <img src={Maxim} height='400' width='400' alt="Maxim Wehi"></img>
                    </div>
                    <div className="column">
                    <h2 className="name-wrapper-title">Maxim Wehi (Te Ihomatua) </h2>
                    <ul className="name-wrapper-pepeha">
                                <li>Ko Matītī te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Tānewhirinaki te whare nui</li>
                                <li>Ko Opekerau te marae</li>
                                <li>Ko Matātua te waka</li>
                                <li>Ko Ngāti Ira te hapū</li>
                                <li>Ko Whakatohea te iwi</li>
                            </ul>
                            <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Construction</li>
                                <li>Project Management</li>
                                <li>Design</li>
                                <li>Creativity</li>
                            </ul>
                            <p className="name-wrapper-description">Maxim has spent most of his professional career in construction and is a qualified carpenter and project manager.</p>
                    </div>
                </div>
                <div className="columns spacing">
                    <div className="column logo-center">
                        <img src={Paul} height='400' width='400' alt="Paul Puru"></img>
                    </div>
                    <div className="column">
                        <h2 className="name-wrapper-title">Pāora Puru (Te Ngākau)</h2>
                        <ul className="name-wrapper-pepeha">
                                <li>Ko Maungawhau te maunga</li>
                                <li>Ko Waioeka te awa</li>
                                <li>Ko Te Mānukanuka 0 Hoturoa te moana</li>
                                <li>Ko Tainui te waka</li>
                                <li>Ko Ngāti Te Ata Waiohua te iwi</li>
                                <li>Ko Te Ata-i-Rehia te tupuna</li>
                                <li>Ko Te Huakaiwaka te rangatira</li>
                            </ul>
                            <h3 className="name-wrapper-subtitle">Professional Skills:</h3>
                            <ul className="name-wrapper-skills">
                                <li>Māori Policy</li>
                                <li>Māori Strategy</li>
                                <li>Treaty Settlements</li>
                                <li>Māori Relationships and Engagement</li>
                            </ul>
                            <p className="name-wrapper-description">Pāora has a passion for Māori development, advocating for Māori to access greater economic opportunities to aid and support whānau, hapū <br /> and iwi prosperity.</p>
                    </div>
                </div>
                
                
                       
                   
        </Layout>
    )
}

export default whoWeAre