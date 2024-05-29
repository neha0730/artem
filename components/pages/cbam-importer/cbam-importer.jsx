import React from "react";
import Link from "next/link";
import styles from "./page-style.css"; 
import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam-importer/text-with-image.png";
import functionalitiesData from "@/components/data/functionalities-data"; 
import cbamBg from "../../../public/assets/img/shape/shape-8.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-19.png";

const CbamImporterMain = () => {
  return (
    <div className="cbam-importer-main">
      <div className="cbam_banner_area section-padding" style={{ backgroundImage: `url(${cbamBg.src})` }}>
        <div className="container p-5 bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
              <div className="cbam__banner_text">
                <h2>
                  How can the IMPORTER easily collect accurate emission data
                  from its suppliers and sub-suppliers?
                </h2>
                <a className="mt-5 btn-one" href="/">
                  REQUEST DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_img_with_text section-padding" style={{ backgroundImage: `url(${cbamMainBg.src})` }}>
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-6 lg-mb-25">
              <div className="cbam_img_with_text-left">
                <div className="cbam_img_with_text-left-title">
                  <h1 className="mb-5">
                    Pioneer cross-border CBAM Compliance for the IMPORTER
                  </h1>
                  <h5>COMPLY WITH CBAM OBLIGATION</h5>
                  <h5 className="text-dark">AND</h5>
                  <h5>OPTIMIZE THE CBAM PRICE YOU PAY!</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cbam_img_with_text-right t-right dark_image">
                <img src={img1.src} alt="img-with-text" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_three_tab section-padding" style={{ backgroundImage: `url(${cbamBg.src})` }}>
        <div className="container">
          <div className="row al-center p-3 bg-white rounded mb-3">
            <div className="col-xl-12">
              <div className="cbam__banner_text">
                <h4 className="text-center">
                  Easy access to data collected along the supply chain
                </h4>
              </div>
            </div>
          </div>
          <div className="row al-center p-3 bg-white rounded mb-3">
            <div className="col-xl-12">
              <div className="cbam__banner_text">
                <h4 className="text-center">
                  Verifiable on all levels of the supply chain
                </h4>
              </div>
            </div>
          </div>
          <div className="row al-center p-3 bg-white rounded mb-3">
            <div className="col-xl-12">
              <div className="cbam__banner_text">
                <h4 className="text-center">Traceability from Top to Bottom</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_service service__one section-padding"
        style={{ backgroundImage: `url(${serviceBg.src})` }}
      >
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h3>Key Functionalities</h3>
                <p>
                  ARTEM provides a clear and easy system to the CBAM Importer to
                  manage the CBAM Data collection along the whole supply chain.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {functionalitiesData?.slice(0, 6)?.map((data, id) => (
              <div className="col-lg-4 col-md-6" key={id}>
                <div
                  className="service__one-item"
                  style={{ backgroundImage: `url(${shape.src})` }}
                >
                  <div className="service-cols service__one-item-content">
                  <h5>{data.id}</h5>
                    <h6>{data.title}</h6>
                    <Link href={data.link} className="mt-3 btn-one text-white">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cbam_advantage-sec">
        <div className="custom__container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <div className="p-3">
                <h3 className="text-white">SEIZE THE ADVANTAGE</h3>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="p-3">
                <h4 className="text-white">
                  Licenses Acess ARTEM today and gain CBAM clients worldwide
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbamImporterMain;
