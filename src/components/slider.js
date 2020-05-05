import React from 'react'
import HeroSlider, { Slide, MenuNav, ButtonsNav, OverlayContainer } from "hero-slider"
import Wrapper from "../components/UI/Wrapper/wrapper"
import Title from "../components/UI/Title/title"
import Subtitle from "../components/UI/Subtitle/subtitle"

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
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 800,
          height: "100vh"
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <Title></Title>
            <Subtitle></Subtitle>
          </Wrapper>
        </OverlayContainer>

        <Slide
          children="Hi"
          navDescription= "Taniko Principles"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}><div className="logo-center">
            <img src={Logo} width="750" height="750" />
            </div>
          </Slide>

        <Slide
          navDescription= "Mauri Atua"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}>
          <Wrapper>
            <Title>Mauri Atua</Title>
            <div className="image-position">
              <img src={Atua} width="500" height="500" />
            </div>
            <Subtitle>We acknowledge the spiritual essence that is intrinsically linked to everything that lives.</Subtitle>
          </Wrapper>
              <div className="translation" data-hover="While the land remains, people disappear.">
                    <i>Toitū te whenua, whatu ngarongaro te tangata.</i>
              </div>
          </Slide>
  
        <Slide
          navDescription= "Mauri Whenua"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}>
             <Wrapper>
            <Title>Mauri Whenua</Title>
            <div className="image-position">
              <img src={Whenua} width="500" height="500" />
            </div>
            <Subtitle>We care for the life essence of our Earth Mother and all life that depends upon her.</Subtitle>
          </Wrapper>
        </Slide>
  
        <Slide
          navDescription= "Mauri Tangata"
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#000000",
          }}>
            <Wrapper>
            <Title>Mauri Tangata</Title>
            <div className="image-position">
              <img src={Tangata} width="500" height="500" />
            </div>
            <Subtitle>We care for and value the importance and sacredness of people.</Subtitle>
          </Wrapper>
        </Slide>

        <MenuNav />
        {/* <ButtonsNav /> */}
        {/* <SideNav />
        <SideNav
          isPositionedRight={false}
          position={{
            top: "50%",
            left: "0",
            transform: "translateY(-50%)"
          }}
        /> */}
      </HeroSlider>
    );
  };
  
  export default Slider
  