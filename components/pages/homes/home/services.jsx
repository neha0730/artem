import React from "react";
import Link from "next/link";
import servicesData from "@/components/data/services-data";
import serviceBg from "../../../../public/assets/img/shape/shape-9.png";
import shape from "../../../../public/assets/img/shape/shape-5.png";

const Services = () => {
  return (
    <div
      className="service__one"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <div className="container">
        <div className="row mb-35">
          <div className="col-xl-12">
            <div className="service__one-title t-center">
              <span className="subtitle-one">&nbsp;</span>
              <h3>ARTEM pioneers cross-border CBAM Compliance</h3>
              <p>
                CBAM aims to put a price on carbon intensive goods entering the
                European Union, hence preventing carbon leakage
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData?.slice(0, 3)?.map((data, id) => (
            <div className="col-lg-4 col-md-6" key={id}>
              <div
                className="service__one-item"
                style={{ backgroundImage: `url(${shape.src})` }}
              >
                <div className="service__one-item-icon">{data.icon}</div>
                <div className="service__one-item-content">
                  <h6>
                    <Link href={`/services/${data.id}`}>{data.title}</Link>
                  </h6>
                  <p>{data.des}</p>
                  {/* <Link className="simple-btn" href={`/services/${data.id}`}>
                    Details More{" "}
                    <span>
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
