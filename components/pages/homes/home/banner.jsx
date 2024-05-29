import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/bannerdeck.jpg";
import banner2 from "../../../../public/assets/img/banner/banner-3.jpg";
import bannerBg from "../../../../public/assets/img/shape/shape-3.png";
import Link from "next/link";
import Count from "../../common/count";

const slideControl = {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 5500,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.banner_next',
        prevEl: '.banner_prev',
    },
};

const BannerOne = () => {
    return (
            <>
            <div className="banner__one">
                <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                    <SwiperSlide>
                        <div className="banner__one-image">
                            <img className="banner__one-shape" src={bannerBg.src} alt="banner-shape" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7">
                                        <div className="banner__one-content">
                                            <span className="subtitle-one">Artem</span>
                                            <h1>Application for the <br /> Reduction and Tracing of <br /> Carbon Emission in Manufacturing</h1>
                                            <p>Achieving Net Zero in places where it seems impossible</p>
                                            <div className="banner__one-content-button">
                                                <Link className="btn-one" href="/about-us">Schedule a Call</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="banner__one-right dark_image">
                                            <img src={banner1.src} alt="banner-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="banner__one-image">
                            <img className="banner__one-shape" src={bannerBg.src} alt="banner-shape" />
                            <div className="container">
                                <div className="row">
                                <div className="col-xl-7">
                                        <div className="banner__one-content">
                                            <span className="subtitle-one">Artem</span>
                                            <h1>Application for the <br /> Reduction and Tracing of <br /> Carbon Emission in Manufacturing</h1>
                                            <p>Achieving Net Zero in places where it seems impossible</p>
                                            <div className="banner__one-content-button">
                                                <Link className="btn-one" href="/about-us">Schedule a Call</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="banner__one-right dark_image">
                                            <img src={banner1.src} alt="banner-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                <div className="container">
                    <div className="row column-reverse">
                
                   
                    </div>
                </div>
            </div>
        </>

    );
};

export default BannerOne;
