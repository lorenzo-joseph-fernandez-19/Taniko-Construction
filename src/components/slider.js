import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider"
import Wrapper from "../components/UI/Wrapper/wrapper.js"
import Title from "../components/UI/Title/title.js"
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
          height: "100vh",
        }}
      >
        <Slide
          navDescription= "Taniko Logo"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}> 
            <div className="logo-center">
              <img src={Logo} width="650" height="650" alt="Taniko Logo"/>
            </div>
            <Subtitle>Weaving a collective Future.</Subtitle>
        </Slide>
        {/* <Slide
          navDescription= "Rangitiranga"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Background,
          }}> 
            <Wrapper>
             <Title>Rangatiranga</Title>
             <Subtitle>Leadership, Independence & Self-Determination</Subtitle>
             <p className="slider-text">We lead ourselves and others, enhancing self-efficacy.</p>
            </Wrapper>
        </Slide>

        <Slide
          navDescription= "Tika"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Background,
          }}> 
            <Wrapper>
             <Title>Tika</Title>
             <Subtitle>Righteousness, Being Correct & Doing the Right Thing</Subtitle>
             <p className="slider-text">We are professional and we always do what is right, and correct.</p>
            </Wrapper>
        </Slide>

        <Slide
          navDescription= "Auahatanga"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
            backgroundImage: Background,
          }}> 
            <Wrapper>
             <Title>Auahatanga</Title>
             <Subtitle>Innovation & Creativity</Subtitle>
             <p className="slider-text">We turn creative and innovative solutions into reality.</p>
            </Wrapper>
        </Slide> */}

        <Nav />
      </HeroSlider>
    );
  };
  
  export default Slider
  