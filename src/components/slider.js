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
          shouldAutoplay: true,
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
          }}><div className="logo-center">
            <img src={Logo} width="750" height="750" alt="Taniko Logo"/>
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
              <img src={Atua} width="450" height="450" alt="Mauri Atua Triangle" />
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
              <img src={Whenua} width="450" height="450" alt="Mauri Whenua Triangle" />
            </div>
            <Subtitle>We care for the life essence of our Earth Mother and all life that depends upon her.</Subtitle>
          </Wrapper>
          <div className="translation" data-hover="What is the most important thing in this world, it is people, it is people, it is people.">
            <i>He aha te mea nui o tēnei ao, he tangata, he tangata, he tangata.</i>
          </div>
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
              <img src={Tangata} width="450" height="450" alt="Mauri Tangata Triangle" />
            </div>
            <Subtitle>We care for and value the importance and sacredness of people.</Subtitle>
          </Wrapper>
          <div className="translation" data-hover="While the land remains, people disappear.">
            <i>Toitū te whenua, whatu ngarongaro te tangata.</i>
          </div>
        </Slide>
        <Nav />
        {/* <MenuNav /> */}
      </HeroSlider>
    );
  };
  
  export default Slider
  