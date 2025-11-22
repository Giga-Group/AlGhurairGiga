import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/about2.jpg'
import abimg2 from '../../images/about3.jpg'


const About2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-left">
                                <img src={abimg} alt=""/>
                                    <div className="wpo-about-img-text">
                                        <h2>60+</h2>
                                        <p>Years of Excellence</p>
                                    </div>
                            </div>
                            <div className="wpo-about-img-right">
                                <img src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                {/* <span>About Al Ghurair Giga Group </span> */}
                                <h3>About Al Ghurair Giga</h3>
                            </div>
                           <p>Al Ghurair Giga Pakistan (Pvt.) Ltd (“Al Ghurair Giga”) is a leading multinational business conglomerate with deep roots in both the Middle East and Pakistan. We operate across a diversified portfolio of industries, including real estate development, textiles, gold refining, and bullion trade, reflecting our broad and integrated vision for sustainable growth. 
                           </p>
                           <div className="wpo-about-title">
                                <h3>Our Heritage</h3>
                            </div>
                           <p>Founded in 1956 by Haji Abdul Rahim Giga, the Giga Group began its journey in Dubai’s textile sector. Over the decades, the group expanded significantly, building a strong presence in key international markets and forging strategic partnerships — most notably with Al Ghurair Group, a well-established conglomerate in the UAE. Our vision is inspired by the remarkable transformation of Dubai under the visionary leadership of His Highness Sheikh Mohammed bin Rashid Al Maktoum. His commitment to innovation, excellence, and world-class development has set global benchmarks in urban planning, governance, and quality of life. At Al Ghurair Giga, we deeply admire the progress Dubai has achieved under his leadership and the standards it embodies.
                           </p>
                           <p>Drawing from these lessons, we aspire to bring a similar level of sophistication, reliability, and modern lifestyle to Pakistan, creating communities that reflect global best practices, elevate living standards, and contribute to the country’s long-term growth. Our mission is to deliver developments that uphold the same spirit of ambition, resilience, and forward-thinking that defines Dubai’s success story.</p>
                            {/* <ul className="ab-list">
                                <li>Over 60+ years of business excellence and premium quality development</li>
                                <li>5,000+ employees worldwide delivering world-class projects</li>
                                <li>10M+ sq ft of commercial & residential space with 99.99% customer satisfaction</li>
                                <li>Iconic projects like Goldcrest Views and Giga Mall redefining urban living</li>
                            </ul> */}
                            {/* <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2;