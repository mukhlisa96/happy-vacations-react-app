import React from 'react'
import instaImage1 from "../assets/images/instagram/insta-1.webp"
import instaImage2 from "../assets/images/instagram/insta-2.webp"
import instaImage3 from "../assets/images/instagram/insta-3.webp"
import instaImage4 from "../assets/images/instagram/insta-4.webp"
import instaImage5 from "../assets/images/instagram/insta-5.webp"


import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'


import SwiperCore from 'swiper'
SwiperCore.use([Autoplay])

const Instaimages = () => {
    return (
        <div>
            <div className=" lg:pt-30 pt-24">
                <div className="swiper">
                    <div className="">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={2}
                            slidesPerView={5}
                            loop={true}
                            speed={2000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)

                            }

                        >
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage1} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage2} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage3} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage4} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage5} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage1} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage2} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage3} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage4} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage5} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage1} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage2} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage3} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden group">
                                    <img src={instaImage4} alt="instagram" />
                                    <a href="#" class="insta-feed-icon">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Instaimages
