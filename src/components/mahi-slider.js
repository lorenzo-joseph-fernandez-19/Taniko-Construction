import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Wrapper from "../components/UI/Wrapper/wrapper.js"
import Title from "../components/UI/Title/title.js"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
import Background from "../images/mobile-background.png"
import Atua from "../images/mauri-atua.svg"
import Whenua from "../images/mauri-whenua.svg"
import Tangata from "../images/mauri-tangata.svg"

const mahiSlider = () => {
    return (
      <HeroSlider
        slidingAnimation='left_to_right'
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 4000,
          height: "100vh"
        }}
      >

        <Slide
          navDescription= "Our Mahi"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000"
          }}> 
            <Wrapper>
                <Title className="mahi-title">Our Mahi</Title>
                <p className="mahi-text">Tāniko will deliver tailored consultancy services to your business. Our outcomes are linked to the core principles of the Tāniko system.</p>
            </Wrapper>
        </Slide>

        <Slide
          navDescription= "Mauri Atua"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}> 
            <Wrapper>
                <div className="logo-center">
                  <img src={Atua} width="300" height="300" alt="Mauri Atua"/>
                  <Title>Mauri Atua</Title>
                  <Subtitle>Spirit Life Essence</Subtitle>
                </div>
              <ul className="mahi-text">
                  <li>Applying a Māori worldview and knowledge to your business philosophy.</li>
                  <hr className="mahi-line"/>
                  <li>Indigenisation strategies that inform innovation.</li>
                  <hr className="mahi-line"/>
                  <li>Activating Māori design and knowledge to your built environment.</li>
              </ul>
            </Wrapper>
        </Slide>

        <Slide
          navDescription= "Mauri Whenua"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Background,
          }}> 
             <Wrapper>
             <div className="logo-center">
              <img src={Whenua} width="300" height="300" alt="Mauri Whenua"/>
            </div>
             <Title>Mauri Whenua</Title>
             <Subtitle>Environmental Life Essence</Subtitle>
             <ul className="mahi-text">
                <li>Interaction with local Māori with education on the land you stand on.</li>
                <hr className="mahi-line"/>
                <li>Optimising your approach to sustainability through a Māori worldview.</li>
            </ul>
            </Wrapper>
        </Slide>

        <Slide
          navDescription= "Mauri Tangata"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Background,
          }}> 
             <Wrapper>
             <div className="logo-center">
              <img src={Tangata} width="300" height="300" alt="Mauri Tangata"/>
            </div>
             <Title>Mauri Tangata</Title>
             <Subtitle>People Life Essence</Subtitle>
                <ul className="mahi-text">
                    <li>Utilizing a relevant Māori supply chain in your business and measuring the impact your support has on local māori aspirations.</li>
                    <hr className="mahi-line"/>
                    <li>Implementing a cultural induction and internship program for your business.</li>
                </ul>
            </Wrapper>
        </Slide>

        <Nav />
      </HeroSlider>
    );
  };
  
  export default mahiSlider
  