import React, { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



const Comfort = () => {
    const [swiper, setSwiper] = useState()
    const [sliderIndex, setIndex] = useState(1)

    const bulletClick = (index) => {
        setIndex(index)
        swiper.slideTo(index)
    }
    return (
        <section className="komfort plr">
            <div className="wmain">
                <div className="komfort__l">
                    <div className="tm">
                        Комфорт+ по доступной цене
                    </div>
                    <ul className="komfort__slider_nav_text swiper-pagination-clickable swiper-pagination-bullets">
                        <li className={sliderIndex == 1 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(1)}>безбарьерная среда</li>
                        <li className={sliderIndex == 2 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(2)}>4-5 квартир на этаже</li>
                        <li className={sliderIndex == 3 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(3)}>авторский дизайн входных групп</li>
                        <li className={sliderIndex == 4 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(4)}>современные детские площадки</li>
                        <li className={sliderIndex == 5 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(5)}>остекленные балконы и лоджии</li>
                        <li className={sliderIndex == 6 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(6)}>продуманные эргономичные планировки</li>
                        <li className={sliderIndex == 7 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(7)}>продуманная современная инженерия</li>
                        <li className={sliderIndex == 8 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(8)}>высокие потолки 2,8 м</li>
                        <li className={sliderIndex == 9 ? "swiper-pagination-bullet swiper-pagination-bullet-active" : "swiper-pagination-bullet"} onClick={() => bulletClick(0)}>качественные современные лифты</li>
                    </ul>
                    <div className="komfort__slider_nav">
                        <div className="komfort__slider_nav_l">
                            <div className="slider_str slider_str_l" onClick={() => { swiper.slidePrev() }}><img src="img/slider_str_l.png" /></div>
                            <div className="komfort__slider_nav_num">
                                <span>{sliderIndex}</span>/<i>{swiper == undefined ? 0 : swiper.slides.length - 2}</i>
                            </div>
                            <div className="slider_str slider_str_r" onClick={() => { swiper.slideNext() }}><img src="img/slider_str_r.png" /></div>
                        </div>
                        <div className="komfort__slider_nav_r">
                            <div className="block_ico"><img src="img/about_slider_ico.png" /></div>
                        </div>
                    </div>
                </div >
                <div className="komfort__r">
                    <Swiper
                        speed={300}
                        spaceBetween={4}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoHeight={true}
                        onSlideChange={() => { swiper != undefined ? setIndex(swiper.realIndex + 1) : setIndex(sliderIndex) }}
                        onSwiper={(swiper) => setSwiper(swiper)}
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
            </div >
        </section >
    )
}

export default Comfort