import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import CircleBar from "../../common/circle-bar";
import shape1 from "../../../../public/assets/img/shape/shape-11.png";
import shape2 from "../../../../public/assets/img/shape/shape-11-dark.png";
import shape3 from "../../../../public/assets/img/shape/shape-12.png";
import image1 from "../../../../public/assets/img/about/carbon.jpg";
import image2 from "../../../../public/assets/img/about/cbam.jpg";
import scope1 from "../../../../public/assets/img/about/Aluminium.jpg";
import scope2 from "../../../../public/assets/img/about/steel.jpg";
import scope3 from "../../../../public/assets/img/about/cement.jpg";
import scope4 from "../../../../public/assets/img/about/electricity.jpg";
import scope5 from "../../../../public/assets/img/about/hydrogen.jpg";
import scope6 from "../../../../public/assets/img/about/fertilizer.jpg";

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };
  return (
    <>
      <div className="about__one section-padding pt-0">
        <img className="about__one-shape dark-n" src={shape1.src} alt="shape" />
        <img
          className="about__one-shape light-n"
          src={shape2.src}
          alt="shape"
        />
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-6 col-lg-5 lg-mb-25">
              <div className="about__one-left">
                <div className="about__one-left-image dark_image">
                  <img src={image2.src} alt="about-image" />
                  <img
                    className="about__one-left-image-shape"
                    src={shape3.src}
                    alt="shape"
                  />
                  <div className="about__one-left-image-two">
                    <img src={image1.src} alt="about-image" />
                  </div>
                  <div className="about__one-left-image-content">
                    <CircleBar progressBar={100} />
                    <h6>Short Project Implementation Time</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about__one-right">
                <div className="about__one-right-title">
                  <span className="subtitle-one">What is Artem?</span>
                  <h2>A solution to CBAM & Carbon leakage</h2>
                  <p>
                    ARTEM provides a technological solution that combats carbon
                    leakage, enables CBAM compliance and facilitates the
                    transition to net zero manufacturing on a global scale,
                    starting with China
                  </p>
                </div>

                <div className="about__scope-of-application">
                  <div className="row">
                    <span class="application-text">Scope of Application</span>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope1.src}
                        alt="about-image"
                      />
                      <h6>Aluminium</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope2.src}
                        alt="about-image"
                      />
                      <h6>Iron & Steel</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope3.src}
                        alt="about-image"
                      />
                      <h6>Cement</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope4.src}
                        alt="about-image"
                      />
                      <h6>Electricity</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope5.src}
                        alt="about-image"
                      />
                      <h6>Hydrogen</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <img
                        className="rounded-circle"
                        src={scope6.src}
                        alt="about-image"
                      />
                      <h6>Fertilizer</h6>
                    </div>
                  </div>
                </div>
                <div className="about__one-right-bottom">
                  <div className="about__one-right-bottom-btn">
                    <Link className="btn-one" href="/about">
                      Unlock Power
                    </Link>
                  </div>
                  <div className="about__one-right-bottom-video">
                    <div className="about__one-right-bottom-video-icon video video-pulse">
                      <span onClick={openVideoModal}>
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        className="video-modal"
        channel="youtube"
        autoplay
        isOpen={openVideo}
        videoId="SZEflIVnhH8"
        onClose={() => setOpenVideo(false)}
      />
    </>
  );
};

export default About;
