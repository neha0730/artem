import Link from 'next/link';
import React from 'react';
import image from "../../../../public/assets/img/pages/clouds.png";

const ChooseUs = () => {
    return (
        <>
            <div className="choose__us section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="choose__us-area">
                                <div className="choose__us-area-title">
                                    <span className="subtitle-one">AARTEM Industrial Knowledge</span>
                                    <h2>Our core competencies</h2>
                                    <p>ARTEM has its roots in manufacturing and mechanical engineering in china and EU,with extensive network in the industry</p>
                                </div>
                                <div className="choose__us-area-list">
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-deal"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Commodities</h6>
                                            <ul>
                                                <li>Automotive Parts</li>
                                                <li>Raw Materials</li>
                                                <li>Supply Chain</li>
                                            </ul>									
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-talk"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Mechanical engineering</h6>		
                                            <ul>
                                                <li>Equipment</li>
                                                <li>Retrofitting</li>
                                                <li>Components</li>
                                                <li>CNC-Control System</li>
                                            </ul>								
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-global-shipping"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Net zero manufacturing</h6>	
                                            <ul>
                                                <li>Clean magnesium</li>
                                                <li>ARTEM</li>
                                                
                                            </ul>										
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="choose__us-area-bottom">
                                    <Link className="btn-one" href="/about-us">Own Tomorrow</Link>
                                    <div className="choose__us-area-bottom-tel sm-mt-25">
                                        <h6>If your have any Questions<br/>Feel free to contact <Link href="tel:+123(548)5256"> +123 (548) 5256</Link></h6>
                                    </div>
                                </div> */}
                                <div className="choose__us-area-image dark_image">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ChooseUs;
