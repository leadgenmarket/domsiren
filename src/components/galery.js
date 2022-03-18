import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export const Galery = () => {
    const [swiper, setSwiper] = useState()
    const [sliderIndex, setIndex] = useState(1)
    return (<section class="gallery plr">
        <div class="wmain">
            <div className='gallery__slider_main'>
                <Swiper
                    spaceBetween={23}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    loop={false}
                    autoHeight={true}
                    onSlideChange={() => { swiper != undefined ? setIndex(swiper.realIndex + 1) : setIndex(sliderIndex) }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    className={"gallery__slider"}
                >
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></SwiperSlide>
                    <SwiperSlide><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></SwiperSlide>
                </Swiper>
            </div>
            <div class="gallery__content">
                <div class="tm">
                    Галерея <br />комплекса
                </div>
                <div class="gallery_tm__dop">
                    “Дом на Сиреневой” предусматривает индивидуальный проект по развитию микрорайона с современной архитектурой, благоустроенными зонами отдыха и спортивными площадками
                </div>
                <div class="gallery__slider_nav">
                    <div class="slider_str slider_str_l" onClick={() => { swiper.slidePrev() }}><img src="img/slider_str_l.png" /></div>
                    <div class="komfort__slider_nav_num">
                        <span>{sliderIndex}</span>/<i>{swiper == undefined ? 0 : swiper.slides.length - 2}</i>
                    </div>
                    <div class="slider_str slider_str_r" onClick={() => { swiper.slideNext() }}><img src="img/slider_str_r.png" /></div>
                </div>
            </div>
        </div>
    </section>
    )
}