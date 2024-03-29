import { FC } from 'react';
import { Link } from 'react-router-dom';
import Slider from "../components/sliders/slider";
import {gears} from "../utils/data";
import guidePromo from "../assets/img/guidePromo.png";
import darkPattern from "../assets/img/darkPattern.svg";
import starComplete from "../assets/img/starComplete.svg";
import blogMedia from "../assets/img/blogMedia.svg";
import brightPattern from "../assets/img/brightPattern.svg";
import {CompleteTextNavigate} from "../components/svg-format-components";
import {mainBecomeBlocks} from "../utils/data";
import BecomeGuideBanner from "../components/scroll-trigger-animation/becomeGuide"


const Home:FC = () => {
  
  return (
    <>
      <div className="home-banner-slider">
        <Slider sliderName={'bannerSlider'}/>
      </div>
      <div className="dark-wrapper">
        <div className="container">
          <div className="vertical-middle-spacing">
            <h1 className="guide-promo-main-title title">
              Expert Mountain Guides for Unforgettable Adventures
            </h1>
            <div className="text-image-layout">
              <div className="image-layout-col">
                <img src={guidePromo} alt="guide-promo-img"/>
              </div>
              <div className="text-layout-col">
                <div className="d-flex ai-center jc-center h-100">
                  <div className="left-text-spacing vertical-text-spacing">
                    <h2 className="title layout-title light">2023 Mountain Guide Adventures</h2>
                    <p className="layout-text light fw-light text">
                      Sure! Here's a shorter version of the guide-info-content for your home page:
                      "2023 Mountain Guide Adventures: Unleash the thrill of the mountains with our expert guides!
                      Embark on an epic mountain journey in 2023. Our experienced guides will lead you through awe-inspiring landscapes, from the majestic Himalayas to the rugged Andes and the enchanting European Alps.
                      With safety as our top priority, our guides ensure a secure and unforgettable experience. Discover the rich cultural heritage, wildlife, and breathtaking views as you conquer the heights.
                      Join us in 2023 and make your mountain dreams come true. Contact us today to start planning your extraordinary adventure!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="become-guide-wrapper">
            <BecomeGuideBanner/>
            {mainBecomeBlocks.map((block, index) => (
              <div className="become-guide-block" key={index}>
                {index % 2 === 0 ? (
                  <div className="image-text-layout w-reverse">
                    <div className="text-layout-col bg-light">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className="text-content-spacing vertical-text-spacing">
                          <h1 className="layout-title title dark fw-bold">{block.title}</h1>
                          <p className="layout-text text dark fw-light">{block.text}</p>
                        </div>
                      </div>
                    </div>
                    <div className="image-layout-col">
                      <img src={block.image} alt={block.image} />
                    </div>
                  </div>
                ) : (
                  <div className="image-text-layout">
                    <div className="image-layout-col">
                      <img src={block.image} alt={block.image} />
                    </div>
                    <div className="text-layout-col bg-bright">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className="text-content-spacing vertical-text-spacing">
                          <h1 className="layout-title title light fw-bold">{block.title}</h1>
                          <p className="layout-text text light fw-light">{block.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="complete-text-navigate">
              <Link to="/become-guide">
                <CompleteTextNavigate/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-dark-pattern">
        <img src={darkPattern} alt="darkPattern"/>
      </div>
      <div className="home-equipments-wrapper">
        <div className="container">
          <div className="equipments-content">
            <h3 className="equipments-title title">NECESSARY EQUIPMENTS</h3>
            <div className="equipments-logo-content">
              {gears.map((gear, index) => (
                <div key={index} className="equipments-logo">
                  <div className="equipments-img">
                    <img src={gear.image} alt="equipments-img" />
                  </div>
                  <p className="equipments-text title dark fw-bold">{gear.text}</p>
                </div>
                ))}
            </div>
          </div>
        </div>
		  </div>
      <div className="home-bright-pattern">
        <img src={brightPattern} alt="brightPattern"/>
      </div>
      <div className="bright-wrapper" style={{paddingTop: "30px"}}>
        <div className="horizontal-border"></div>
        <div className="left-vertical-border border-cut"></div>
        <div className="right-vertical-border border-cut"></div>
        <div className="container">
          <div className='blogMedia-banner-block'>
            <div className="blogMedia-banner">
              <img src={blogMedia} alt="blog-media"/>
            </div>
            <div className="homeStarImg">
              <img src={starComplete} alt="homeStarImg"/>
            </div>
          </div>
          <div className="horizontal-border"></div>
          <div className="vertical-large-spacing">
            <Slider sliderName={'blogSlider'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
    