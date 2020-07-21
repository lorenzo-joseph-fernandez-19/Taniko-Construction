import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Subtitle from "../components/UI/Subtitle/subtitle.js"
import Wrapper from '../components/UI/Wrapper/wrapper'
import Image from "../images/homepage.jpg"


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
              <Subtitle>Tāniko is a professional consultancy group that will reveal the hidden potential embedded in sacred  principles, making them relevant  in today's world. We collaborate with individuals and organisations by interweaving ancient pathways into modern business practice.  The adoption of the Tāniko system will result in the enhancement of social, environmental, economic and cultural aspirations'</Subtitle>
            </div>
          </div>
        </Slide>
        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  