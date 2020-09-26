import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
import Image from "../images/flax.jpg"


const Slider = () => {
    return (
      <HeroSlider
        slidingAnimation='left_to_right'
        orientation="vertical"
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
          height: '600px',
        }}
      >
        <Slide
          navDescription= "Taniko Logo"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Image,
            backgroundBlendMode: '#000000',
          }}>
              <Subtitle>Tāniko which means 'to weave together' is a professional Māori enablement collective. <br /> <div class="slider-spacing"></div>Interweaving indigenous knowledge into modern business practices to reveal the hidden potential and to inspire business innovation excellence.</Subtitle>
        </Slide>
        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  