import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Wrapper from "../components/UI/Wrapper/wrapper.js"
import Title from "../components/UI/Title/title.js"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
import Atua from "../images/mauri-atua.svg"
import Whenua from "../images/mauri-whenua.svg"
import Tangata from "../images/mauri-tangata.svg"
import Logo from "../images/logo-white.svg"

const Slider = () => {
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
          backgroundColor: "#000"
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: false,
          shouldDisplayButtons: true,
          autoplayDuration: 4000,
          height: "100vh"
        }}
      >

        <Slide
          navDescription= "Taniko Principles"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}> 
            <div className="logo-center">
              <img src={Logo} width="750" height="750" alt="Taniko Logo"/>
            </div>
        </Slide>
        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  