import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
import Wrapper from '../components/UI/Wrapper/wrapper'
import Image from "../images/flax.jpg"


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
            backgroundImage: Image,
            backgroundBlendMode: '#000000',
          }}>
          <div className="columns">
            <div className="column is-4">
              <Subtitle>Tāniko which means ‘to weave together’ is a professional Māori enablement collective that facilitates and implements indigenous principles and knowledge and makes them relevant in today’s world. We collaborate with individuals and organisations by interweaving indigenous knowledge into modern business practices to reveal the hidden potential and to inspire business innovation excellence.</Subtitle>
            </div>
          </div>
        </Slide>
        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  