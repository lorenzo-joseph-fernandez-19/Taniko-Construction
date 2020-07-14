import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
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
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: false,
          shouldDisplayButtons: false,
          autoplayDuration: 4000,
          height: '100vh',
        }}
      >
        <Slide
          navDescription= "Taniko Logo"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}>
          <div className="slide-spacing">
            <div className="logo-center">
              <img src={Logo} width="650" height="650" alt="Taniko Logo"/>
            </div>
            <Subtitle>Weaving a collective future together</Subtitle>
          </div>
        </Slide>
        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  