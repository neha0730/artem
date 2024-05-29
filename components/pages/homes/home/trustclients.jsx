import React from "react";
import Image from "next/image";
import img1 from "../../../../public/assets/img/about/industry.jpg";
import bgImage from "../../../../public/assets/img/shape/shape-10.png";
import client1 from "../../../../public/assets/img/about/client1.png";
import client2 from "../../../../public/assets/img/about/client2.png";
import client3 from "../../../../public/assets/img/about/client3.png";
import client4 from "../../../../public/assets/img/about/client4.png";
import client5 from "../../../../public/assets/img/about/client5.png";
import client6 from "../../../../public/assets/img/about/client6.png";
import client7 from "../../../../public/assets/img/about/client7.png";
import client8 from "../../../../public/assets/img/about/client8.png";
import client9 from "../../../../public/assets/img/about/client9.png";
import client10 from "../../../../public/assets/img/about/client10.png";

const Trustclients = () => {
  return (
    <div>
      <div className="trustclient-one section-padding-half">
        <div className="container overflow-hidden">
          <div className="row gy-4">
            <div className="col-6 col-md-12 col-xl-12 text-center ">
              <h4 className="mb-4 display-7 ">Trusted by Industry Leaders.</h4>
            </div>
            <div className="row col-6 col-md-12 col-xl-12 text-center">
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client5.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client6.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client7.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client8.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client9.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img src={client10.src} alt="about-image" />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img
                    src={client1.src}
                    alt="about-image"
                    className="smallimage"
                  />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img
                    src={client2.src}
                    alt="about-image"
                    className="smallimage"
                  />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img
                    src={client3.src}
                    alt="about-image"
                    className="smallimage"
                  />
                </div>
              </div>
              <div className="col-6 col-md-2 col-xl-2 text-center">
                <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                  <img
                    src={client4.src}
                    alt="about-image"
                    className="smallimage"
                  />
                </div>
              </div>
              {/* <div className="col-6 col-md-2 col-xl-2 text-center">
              <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                <img src={client3.src} alt="about-image" />
              </div>
            </div>
            <div className="col-6 col-md-2 col-xl-2 text-center">
              <div className="text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 ">
                <img src={client4.src} alt="about-image" />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="trustclient-card-img section-padding pt-0"
        style={{ backgroundImage: `url(${img1.src})`, backgroundSize: "cover" }}
      >
        <div className="card-img container">
          <div className="card-title-bg">
            <h5 className="card-title center">
              A platform tailored to your industry
            </h5>
          </div>

          <div className="card-image-overlay container">
            <div className="d-flex flex-col">
              <button
                type="button"
                classNane="btn btn-secondary btn-lg btn-block"
              >
                Operators
              </button>
              <button
                type="button"
                classNane="btn btn-secondary btn-lg btn-block"
              >
                Declarants
              </button>
              <button
                type="button"
                classNane="btn btn-secondary btn-lg btn-block"
              >
                Verifiers
              </button>
              <button
                type="button"
                classNane="btn btn-secondary btn-lg btn-block"
              >
                Consultants
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustclients;
