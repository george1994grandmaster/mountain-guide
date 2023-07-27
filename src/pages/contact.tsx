import { FC } from "react";
import { Link } from 'react-router-dom';
import Form from "../components/forms/form";
import lightStar from "../assets/img/lightStar.svg";
import mapStar from "../assets/img/mapStar.svg";
import starComplete from "../assets/img/starComplete.svg";
import location from "../assets/img/location.svg";
import { contactInfo } from "../utils/data"

const Contact:FC = () => {
  return (
    <>
      <div className="main-banner-wrapper p-relative ai-center">
        <div className="certificate-top-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="certificate-bottom-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="container">
          <h1 className="main-banner-title light fw-strong title ">
            GET IN TOUCH
          </h1>
        </div>
      </div>
      <div className="horizontal-border"></div>
      <div className="bright-wrapper">
        <div className="container">
          <div className="vertical-middle-spacing">
            <div className="contact-layout-content">
              <div className="contact-form-block">
                <div className="contact-media-flexible">
                  <div className="form-wrapper">
                    <div className="contact-border-overlay">
                      <div className="form-content bg-light">
                        <div className="left-middle-star p-absolute">
                          <img src={lightStar} alt="star-img"/>
                        </div>
                        <div className="right-bottom-star p-absolute">
                          <img src={lightStar} alt="star-img"/>
                        </div>
                        <div className="right-top-star p-absolute">
                          <img src={lightStar} alt="star-img"/>
                        </div>
                        <Form formType="contactForm" /> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="contact-media-flexible">
                  <div className="info-star">
                    <img src={starComplete} alt="info-star" />
                  </div>
                  <div className="contact-inner-spacing">
                    {contactInfo.map((el, index) => (
                      <div className="contact-info-item">
                        <Link to="#">
                          {el.icon}
                          <span className="text light fw-bold">
                            {el.label}
                          </span>
                        </Link>       
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-layout-content md-reverse">
              <div className="contact-location-block">
                <div className="location-star">
                  <img src={starComplete} alt="location-star" />
                </div>
                <div className="d-flex ai-center jc-center">
                  <span className="location-icon">
                    <img src={location} alt="location-icon" />
                  </span>
                  <span className="text light fw-bold">
                    Guide company location No/1
                  </span>
                </div>
              </div>
              <div className="contact-map-block">
                <div className="map-star">
                  <img src={mapStar} alt="map-star" />
                </div>
                <div className="map-border-overlay">
                  <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.742369857893!2d-73.9864!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sge!4v1634551240275!5m2!1sen!2sge"
                    height="400"
                    width="100%"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;