import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/timeline1.png";
import image2 from "../../../../public/assets/img/pages/timeline2.png";
import image3 from "../../../../public/assets/img/pages/timeline3.png";
import image4 from "../../../../public/assets/img/pages/timeline4.png";
import Timeline from "./timeline";
import serviceBg from "../../../../public/assets/img/shape/shape-9.png";
const WorkArea = () => {
  return (
    <>
      <div
        className="work__process section-padding"
        style={{ backgroundImage: `url(${serviceBg.src})` }}
      >
        <div className="container">
          <div className="row mb-70">
            <div className="col-xl-12">
              <div className="work__process-title t-center">
                <h3>ARTEM is part of the SINOMAG Group</h3>
                <br></br>
                <h5>Our history</h5>
              </div>
            </div>
          </div>
          {/* <div className="row g-0 dark_image">
                        <div className="col-lg-2 col-sm-6 lg-mb-45">
                            <div className="work__process-item">
                                <p><span>1997</span></p>
                                <img src={image1.src} alt="image" />
                                <h6>Mersher GmbH</h6>
                                <p className="des">Foundation of Mersher GmbH in Düsseldorf</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>2001</span></p>
                                <img src={image2.src} alt="image" />
                                <h6>First Factory</h6>
                                <p className="des">Opening of first factory in China producing magnesium & Aluminum raw material</p>
                            </div>					
                        </div>
                        <div className="col-lg-2 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>2003</span></p>
                                <img src={image3.src} alt="image" />
                                <h6>Second factory</h6>
                                <p className="des">Opening of second factory in Tianjin for HPDC Al/Mg casting, tooling and machining</p>
                            </div>					
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="work__process-item">
                                <p><span>2005</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Third factory</h6>
                                <p className="des">Opening of third factory in Wuhu for casting of automotive parts and machining</p>
                            </div>						
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="work__process-item">
                                <p><span>2005</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Third factory</h6>
                                <p className="des">Opening of third factory in Wuhu for casting of automotive parts and machining</p>
                            </div>						
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="work__process-item">
                                <p><span>2005</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Third factory</h6>
                                <p className="des">Opening of third factory in Wuhu for casting of automotive parts and machining</p>
                            </div>						
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="work__process-item">
                                <p><span>2005</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Third factory</h6>
                                <p className="des">Opening of third factory in Wuhu for casting of automotive parts and machining</p>
                            </div>						
                        </div>


                    </div> */}

          <Timeline></Timeline>
          <div className="row mb-70">
            <div className="col-xl-12">
              <div className="work__process-title t-center pb-30">
                <h5>Our Core Competencies</h5>
              </div>
              <div className="choose__us-area-list-work jc-center">
                <div className="choose__us-area-list-item">
                  <i className="flaticon-deal"></i>
                  <div className="choose__us-area-list-item-bottom">
                    <h6>Commodities</h6>
                    <div>
                      <div className="lineItem">
                        <span className="header">Automotive Parts</span>
                        <p className="textdata">Wear parts and product.</p>
                      </div>

                      <div className="lineItem">
                        <span className="header">Raw Materials</span>
                        <p className="textdata">
                          Aluminum, magnesium alloys, magnesium chips.
                        </p>
                      </div>

                      <div className="lineItem">
                        <span className="header">Supply Chain</span>
                        <p className="textdata">
                          Logistics, customs, trade financing, regulatory
                          compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose__us-area-list-item">
                  <i className="flaticon-talk"></i>
                  <div className="choose__us-area-list-item-bottom">
                    <h6>Mechanical Engineering</h6>
                    <div>
                      <div className="lineItem">
                        <span className="header">Equipment</span>
                        <p className="textdata">
                          Production of new tools for die casting and gravity
                          die casting; production of prototype tools and
                          components.
                        </p>
                      </div>

                      <div className="lineItem">
                        <span className="header">Retrofitting</span>
                        <p className="textdata">Tool making and repairs.</p>
                      </div>

                      <div className="lineItem">
                        <span className="header">Components</span>
                        <p className="textdata">
                          Small series and prototypes for automotive components.
                        </p>
                      </div>
                      <div className="lineItem">
                        <span className="header">CNC-Control System</span>
                        <p className="textdata">
                          Developing electronic processes for controlling
                          CNC-machines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose__us-area-list-item">
                  <i className="flaticon-global-shipping"></i>
                  <div className="choose__us-area-list-item-bottom">
                    <h6>Net zero manufacturing</h6>
                    <div>
                      <div className="lineItem">
                        <span className="header">Clean magnesium</span>
                        <p className="textdata">
                          Process for green magnesium reduction.
                        </p>
                      </div>

                      <div className="lineItem">
                        <span className="header">ARTEM</span>
                        <p className="textdata">
                          Application for reduction and tracing of emissions in
                          manufacturing in accordance with CBAM .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkArea;
