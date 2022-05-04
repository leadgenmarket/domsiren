import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


const Hod_str = () => {
    const [swiper, setSwiper] = useState()
    const [sliderIndex, setIndex] = useState(1)
    const slider = useRef(null);
    const [hod_a, setHod_a] = useState(null);
    const [active, setActive] = useState({
        year: null,
        month: null,
        photos: []
    })
    const [photos, setPhotos] = useState([])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            }
        ],
        // draggable: false,
    };


    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/hod_react.php", headers)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setHod_a(result)

                let year = Object.keys(result.struct)[Object.keys(result.struct).length - 1]
                let month = Object.keys(result.struct[year])[Object.keys(result.struct[year]).length - 1]
                let photos = result.photos[year + "_" + month]

                setActive({
                    year: year,
                    month: month,
                    photos: photos
                })

                setPhotos(photos)
            })

    }, [])

    if (hod_a == null || active.year == null) {
        return <div>loading</div>
    }

    const yearClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.year = e.currentTarget.getAttribute('data')
        tmp.month = Object.keys(hod_a.struct[tmp.year])[Object.keys(hod_a.struct[tmp.year]).length - 1]
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]

        setActive(tmp)
        setPhotos(tmp.photos)
    }
    const monthClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.month = e.currentTarget.getAttribute('data')
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]
        setActive(tmp)
        setPhotos(tmp.photos)
    }

    const monthName = (month) => {
        let name = ''
        switch (month) {
            case '1':
                name = "Январь"
                break
            case '2':
                name = "Февраль"
                break
            case '3':
                name = "Март"
                break
            case '4':
                name = "Апрель"
                break
            case '5':
                name = "Май"
                break
            case '6':
                name = "Июнь"
                break
            case '7':
                name = "Июль"
                break
            case '8':
                name = "Август"
                break
            case '9':
                name = "Сентябрь"
                break
            case '10':
                name = "Октябрь"
                break
            case '11':
                name = "Ноябрь"
                break
            case '12':
                name = "Декабрь"
                break
        }
        return name
    }


    return (<section class="hod">
        <div class="wmain plr">
            <div class="tm__main">
                <div class="tm">
                    Надежная <br />сделка
                </div>
                <div class="tm__info">
                    <i><img src="img/sdelka_head_ico.png" /></i>
                    <span>
                        Жилой комплекс строится по ФЗ 214 с использованием проектного финансирования и эскроу-счетов. Со всей документацией по объекту вы можете ознакомиться на сайте Единой информационной системы жилищного строительства <a target="blank" href='https://xn--80az8a.xn--d1aqf.xn--p1ai/'>наш.дом.рф</a>
                    </span>
                </div>
            </div>
            <div class="hod_nav">
                <div class="hod_nav__year">
                    {Object.keys(hod_a.struct).reverse().map((year) => {
                        return <div className={active.year == year ? "act" : ""} data={year} onClick={yearClick}>{year}</div>
                    })}
                </div>
                <div class="hod_nav__mounth">
                    {Object.keys(hod_a.struct[active.year]).reverse().map((month) => {
                        return <div href="#" onClick={monthClick} data={month} className={active.month == month ? "act" : ""}>{monthName(month)}</div>
                    })}
                </div>
            </div>
        </div>
        <Swiper
            speed={300}
            spaceBetween={4}
            slidesPerView={"auto"}
            centeredSlides={false}
            loop={false}
            autoHeight={true}
            onSwiper={(swiper) => setSwiper(swiper)}
            className={"hod__slider"}
        >
            {photos ? photos.map((photo) => {
                return <a href="#">
                    <SwiperSlide><a class="hod__slide" href="#"><img src={process.env.REACT_APP_BACKEND_URL + "/" + photo} /></a></SwiperSlide>
                </a>
            }) : ""}

        </Swiper>
        <div class="hod__slider_nav">
            <div class="slider_str slider_str_l" onClick={() => { swiper.slidePrev() }}><img src="img/slider_str_l.png" /></div>
            <div class="slider_str slider_str_r" onClick={() => { swiper.slideNext() }}><img src="img/slider_str_r.png" /></div>
        </div>
    </section >
    )
}

export default Hod_str