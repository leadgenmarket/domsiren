import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Comfort = () => {
    /*
     speed: 300,
        slidesPerView: "auto",
        spaceBetween: 4,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        navigation: {
            prevEl: '.hod__slider .slider_str_l',
            nextEl: '.hod__slider .slider_str_r',
        }
    
    */

    return (
        <section className="komfort plr">
            <div className="wmain">
                <div className="komfort__l">
                    <div className="tm">
                        Комфорт+ по доступной цене
                    </div>
                    <ul className="komfort__slider_nav_text"></ul>
                    <div className="komfort__slider_nav">
                        <div className="komfort__slider_nav_l">
                            <div className="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
                            <div className="komfort__slider_nav_num">
                                <span>03</span>/<i>09</i>
                            </div>
                            <div className="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
                        </div>
                        <div className="komfort__slider_nav_r">
                            <div className="block_ico"><img src="img/about_slider_ico.png" /></div>
                        </div>
                    </div>
                </div>
                <div className="komfort__r">
                    <Swiper
                        speed={300}
                        spaceBetween={4}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoHeight={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="img/about_slider_img1.jpg" /></a></SwiperSlide>
                    </Swiper>
                    <div className="komfort__slider_decor"></div>
                </div>
            </div>
        </section>
    )
}

export default Comfort