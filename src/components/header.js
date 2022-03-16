import React, { useContext } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Main = () => {
    return (
        <section className='container_main'>
            {/* begin hl_top */}
            <div class="hl_top plr">
                <div class="wmain">
                    <div class="hl_top__l">
                        <div class="logo">дом<br />на сиреневой</div>
                        <div class="btn_nav_mobile">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="hl_nav">
                        <a href="#">Ипотека от 0,1 %</a>
                        <a href="#">Планировки и цены</a>
                        <a href="#">Инфраструктура</a>
                        <a href="#">Контакты</a>
                    </div>
                    <a class="hl_phone" href="#"><img src="img/hl_phone_ico.png" />8 499 123 45 67</a>
                </div>
            </div>
            {/* end hl_top */}
            {/* begin header */}
            <div class="header plr">
                <div class="header_center">
                    <h1>
                        Квартиры <br />в новом доме
                    </h1>
                    <div class="head_slogan">
                        <img src="img/head_plashka_ico.png" />
                        комфорт-класса в развитом районе г. Щелково
                    </div>
                    <div class="head_price">
                        <div>
                            квартиры от
                            <span>4.1</span>
                            млн. ₽
                        </div>
                    </div>
                </div>
            </div>
            {/* end header */}
            {/* begin infra */}
            <div class="infra">
                <div class="infra_head plr">
                    <div class="infra_head__inner">
                        <div class="infra_head__inner_l">
                            <div class="infra_head__inner_l_content">
                                <div class="infra_head__title">
                                    Развитый<br />микрорайон
                                </div>
                                <div class="infra_head__title_dop">
                                    с готовой инфраструктурой
                                </div>
                            </div>
                        </div>
                        <div class="infra_head__inner_r"></div>
                    </div>
                </div>
                <div class="plr">
                    <div class="infra_content">
                        <ul class="infra_content__list">
                            <li>
                                <i>1</i>
                                <span>минута пешком до детского сада</span>
                            </li>
                            <li>
                                <i>5</i>
                                <span>минут пешком до школы</span>
                            </li>
                            <li>
                                <i>5</i>
                                <span>минут пешком до супермаркетов “Магнит” и “Пятерочка</span>
                            </li>
                            <li>
                                <i>10</i>
                                <span>минут пешком до лесопарковой зоны</span>
                            </li>
                            <li>
                                <i>10</i>
                                <span>минут пешком до гипермаркета “Касторама”</span>
                            </li>
                            <li>
                                <i>10</i>
                                <span>минут пешком до торгового центра “Глобус”</span>
                            </li>
                        </ul>
                        <div class="infra_content__list_info">
                            <img src="img/infra_map_ico.png" />
                            <span>
                                а также в пешей доступности кинотеатр, железнодорожная станция, магазины, аптеки, кафе и рестораны.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* end infra */}
            {/* begin get_present */}
            <div class="get_present plr">
                <div class="wmain">
                    <div class="tm__main">
                        <div class="tm">
                            Получите презентацию <br />объекта
                        </div>
                        <div class="tm__info">
                            <i><img src="img/btn_get_flat_ico.png" /></i>
                            <span>С планировками<br />и ценами</span>
                        </div>
                    </div>
                    <form class="form_style">
                        <div class="in_3">
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_name.png" /></i>
                                    <input type="text" value="Алексей" data="Алексей" />
                                </label>
                            </div>
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_mail.png" /></i>
                                    <input type="text" value="Ваш e-mail" data="Ваш e-mail" />
                                </label>
                            </div>
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_phone.png" /></i>
                                    <input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" />
                                </label>
                            </div>
                        </div>
                        <div class="alicen_center">
                            <button class="btn_form">
                                <img src="img/btn_get-present_ico.png" />
                                <span>Получить презентацию</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* end get_present */}
            {/* begin komform */}
            <div class="komfort plr">
                <div class="wmain">
                    <div class="komfort__l">
                        <div class="tm">
                            Комфорт+ по доступной цене
                        </div>
                        <ul class="komfort__slider_nav_text"></ul>
                        <div class="komfort__slider_nav">
                            <div class="komfort__slider_nav_l">
                                <div class="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
                                <div class="komfort__slider_nav_num">
                                    <span>03</span>/<i>09</i>
                                </div>
                                <div class="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
                            </div>
                            <div class="komfort__slider_nav_r">
                                <div class="block_ico"><img src="img/about_slider_ico.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="komfort__r">
                        <div class="komfort__slider swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a href="#"><img src="img/about_slider_img1.jpg" /></a></div>
                            </div>
                        </div>
                        <div class="komfort__slider_decor"></div>
                    </div>
                </div>
            </div>
            {/* end komform */}
            {/* begin plan_home */}
            <div class="plan_home">
                <div class="wmain plr">
                    <div class="tm">
                        Посмотрите планировки
                    </div>
                    <div class="plan_home__info">Выберите корпус и этаж, чтобы посмотреть планировки</div>
                </div>
                <div class="plan_home__content">
                    <div class="t853__scroll-icon-wrapper" style="mix-blend-mode: multiply;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 300" height="42" width="42">
                            <path class="tooltip-horizontal-scroll-icon_hand" d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z" fill="#711F64"></path>
                        </svg>
                    </div>
                    <div class="plan_home__img"><img src="img/home_main.jpg" /></div>
                    <div class="plan_home__hover">
                        <div class="plan_home__hover_img plan_home__hover_img1">
                            <div class="plan_home__hover_info">
                                <i>1</i>
                                <span>ЛИТЕР</span>
                            </div>
                            <img src="img/plan_home__1.svg" />
                        </div>
                        <div class="plan_home__hover_img plan_home__hover_img2">
                            <div class="plan_home__hover_info">
                                <i>2</i>
                                <span>ЛИТЕР</span>
                            </div>
                            <img src="img/plan_home__2.svg" />
                        </div>
                        <div class="plan_home__hover_img plan_home__hover_img3">
                            <div class="plan_home__hover_info">
                                <i>3</i>
                                <span>ЛИТЕР</span>
                            </div>
                            <img src="img/plan_home__3.svg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end plan_home */}
            {/* begin transport */}
            <div class="transport plr">
                <div class="wmain">
                    <div class="transport__l">
                        <div class="tm">
                            Удобная транспортная <br />инфраструктура
                        </div>
                        <div class="transport__bg">
                            <div class="tm__dop">
                                В пешей доступности расположена станция Воронок, <br />которая к 2030 году войдет в систему наземного метро МЦД 51.
                            </div>
                            <div class="transport__nav">
                                <div class="transport__nav_item transport__nav_item_act">
                                    <i>
                                        <img src="img/infra_ico1.png" />
                                        <img src="img/infra_ico1_act.png" />
                                    </i>
                                    <span>
                                        на автомобиле
                                    </span>
                                </div>
                                <div class="transport__nav_item">
                                    <i>
                                        <img src="img/infra_ico2.png" />
                                        <img src="img/infra_ico2_act.png" />
                                    </i>
                                    <span>
                                        на общественном <br />транспорте
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transport__r">
                        <div id="map" style="width: 100%; height: 100%;"></div>
                    </div>
                </div>
            </div>
            {/* end transport */}
            {/* begin flat */}
            <div class="flat plr">
                <div class="wmain">
                    <div class="tm">Выберите квартиру</div>
                    <div class="tm__dop">по нужным параметрам</div>
                    <div class="flat__nav">
                        <div class="flat__nav_room">
                            <div>все</div>
                            <div class="act">студии</div>
                            <div>1 - ком</div>
                            <div>2 - ком</div>
                            <div>3 - ком</div>
                        </div>
                        <div class="flat__nav_etaj">
                            <div class="flat__nav_name">Выберите этаж</div>
                            <div id="slid__etaj" class="slid"></div>
                        </div>
                    </div>
                    <div class="flat__list swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="flat__item">
                                    <div class="flat__item_img"><img src="img/flat_img1.png" /></div>
                                    <div class="flat__item_content">
                                        <div class="flat__item_content_head">
                                            <div class="flat__item_name">
                                                1-комнатная Квартира
                                            </div>
                                            <div class="flat__item_area">
                                                площадь
                                                <span>67.5 м²</span>
                                            </div>
                                        </div>
                                        <div class="flat__item_btn">
                                            Узнать стоимость<img src="img/btn_coast_str.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flat__list_nav">
                            <div class="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
                            <div class="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end flat */}
            {/* begin get_flat */}
            <div class="get_flat plr">
                <div class="wmain">
                    <div class="tm__main">
                        <div class="tm">
                        Получите подборку <br />свободных квартир
                        <span>с планировками и ценами</span>
                        </div>
                        <div class="tm__info">
                            <i><img src="img/get_flat_ico.png" /></i>
                            <span>Отправляем в <br />течении 30 минут</span>
                        </div>
                    </div>
                    <form class="form_style">
                        <div class="flat__nav">
                            <div class="flat__nav_room">
                                <div>все</div>
                                <div class="act">студии</div>
                                <div>1 - ком</div>
                                <div>2 - ком</div>
                                <div>3 - ком</div>
                            </div>
                            <div class="flat__nav_etaj">
                                <div class="flat__nav_name">Выберите этаж</div>
                                <div id="slid__etaj2" class="slid"></div>
                            </div>
                        </div>
                        <div class="in_3">
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_name.png" /></i>
                                    <input type="text" value="Алексей" data="Алексей" />
                                </label>
                            </div>
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_mail.png" /></i>
                                    <input type="text" value="Ваш e-mail" data="Ваш e-mail" />
                                </label>
                            </div>
                            <div class="in_item">
                                <label class="in_style">
                                    <i><img src="img/in_phone.png" /></i>
                                    <input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" />
                                </label>
                            </div>
                        </div>
                        <div class="alicen_center">
                            <button class="btn_form">
                                <img src="img/btn_get_flat_ico.png" />
                                <span>Получить подборку</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* end get_flat */}
            {/* begin ipoteka */}
            <div class="ipoteka plr">
                <div class="wmain">
                    <div class="ipoteka__head">
                        <div class="tm">
                            Выгодная <br />ипотека
                        </div>
                        <div class="ipoteka__head_info">
                            Для покупателей квартир в нашем комплексе доступны различные ипотечные программы, а также покупке с использованием материнского капитала и военная ипотека.
                        </div>
                    </div>
                    <ul class="ipoteka__list">
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico1.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        0,1% на первый год
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico2.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        от 8,2% на весь срок
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico3.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        семейная ипотека <br />от 3,6%
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico4.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        без первого взноса
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico5.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        с господдержкой <br />от 4,7%
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ipoteka__list_item">
                                <div class="ipoteka__list_ico"><img src="img/ipoteka_list_ico6.png" /></div>
                                <div class="ipoteka__list_content">
                                    <div class="ipoteka__list_name">
                                        военная ипотека
                                    </div>
                                    <div class="ipoteka__list_btn">Подробнее</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* end ipoteka */}
            {/* begin gallery */}
            <div class="gallery plr">
                <div class="wmain">
                    <div class="gallery__slider_main">
                        <div class="gallery__slider swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img1.jpg" /></a></div>
                                <div class="swiper-slide"><a class="gallery__slide" href="#"><img src="img/gallery_img2.jpg" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="gallery__content">
                        <div class="tm">
                            Галерея <br />комплекса
                        </div>
                        <div class="gallery_tm__dop">
                            “Дом на Сиреневой” предусматривает индивидуальный проект по развитию микрорайона с современной архитектурой, благоустроенными зонами отдыха и спортивными площадками
                        </div>
                        <div class="gallery__slider_nav">
                            <div class="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
                            <div class="komfort__slider_nav_num">
                                <span>03</span>/<i>09</i>
                            </div>
                            <div class="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end gallery */}
            {/* begin hod */}
            <div class="hod">
                <div class="wmain plr">
                    <div class="tm__main">
                        <div class="tm">
                            Надежная <br />сделка
                        </div>
                        <div class="tm__info">
                            <i><img src="img/sdelka_head_ico.png" /></i>
                            <span>
                                Жилой комплекс строится по ФЗ 214 с использованием проектного финансирвоания и эксроу-счетов. Со всей документацией по объекту вы можете ознакомиться на сайте Единой информационной системы жилищного строительства наш.дом.рф
                            </span>
                        </div>
                    </div>
                    <div class="hod_nav">
                        <div class="hod_nav__year">
                            <div class="act">2020</div>
                            <div>2022</div>
                        </div>
                        <div class="hod_nav__mounth">
                            <div class="act">июль</div>
                            <div>июнь</div>
                            <div>май</div>
                            <div>апрель</div>
                            <div>март</div>
                            <div>февраль</div>
                        </div>
                    </div>
                </div>
                <div class="hod__slider swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img1.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img2.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img3.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img1.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img2.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img3.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img1.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img2.jpg" /></a></div>
                        <div class="swiper-slide"><a class="hod__slide" href="#"><img src="img/hod_img3.jpg" /></a></div>
                    </div>
                    <div class="hod__slider_nav">
                        <div class="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
                        <div class="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
                    </div>
                </div>
            </div>
            {/* end hod */}
            {/* begin contact */}
            <div class="contact plr">
                <div class="wmain">
                    <div class="cont_l">
                        <div class="tm">
                            Офис продаж <br />и контакты
                        </div>
                        <ul class="cont_list">
                            <li>
                                <div class="cont_list__title"><i><img src="img/cont_ico1.png" /></i>Адрес</div>
                                <div class="cont_list__info">
                                    Щелково,  Центральная ул. 71/1 <br />(дальний вход в магазин ДА)
                                </div>
                            </li>
                            <li>
                                <div class="cont_list__title"><i><img src="img/cont_ico2.png" /></i>Телефон</div>
                                <div class="cont_list__info">
                                    <a href="tel:+74951279553">+7 495 127 95 53</a>
                                </div>
                            </li>
                            <li>
                                <div class="cont_list__title"><i><img src="img/cont_ico3.png" /></i>Время работы</div>
                                <div class="cont_list__info">
                                    пн-пт:  10:00 - 21:00; <br />сб-вск: 10:00 - 20:00
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="cont_r">
                        <div id="map2" style="width: 100%; height: 100%;"></div>
                    </div>
                </div>
            </div>
            {/* end contact */}
            {/* begin footer */}
            <div class="footer plr">
                <div class="wmain">
                    <div class="f_copy">© 2022 ЖК”Дом на Сиреневой”</div>
                    <div class="f_center">
                        Отправляя любую форму на сайте, вы соглашаетесь с <a href="#">политикой конфиденциальности</a> данного сайта, а также на получение рассылки на электронную почту, указанную в заявке. Не является публичной офертой
                    </div>
                    <a class="f_create" href="#">
                        <span>Разработка и лидогенерация</span><img src="img/create_logo.png" />
                    </a>
                </div>
            </div>
            {/* end footer */}
        {/* begin pu_rgba */}
        <div style="display: none;" class="pu_rgba plr">
            <div class="pu_table">
                <div class="pu_cell">
                    {/* pu */}
                    <div style="display: none;" class="pu_inner pu_flat">
                        <div class="closeform"><img src="img/closeform.svg" /></div>
                        <div class="pu_title">
                            Двухкомнатная <br />квартира:
                        </div>
                        <div class="pu_flat">
                            <div class="pu_flat_l">
                                <ul class="pu_flat_info">
                                    <li>
                                        Общая площадь
                                        <span>73,39 М²</span>
                                    </li>
                                    <li>
                                        Жилая площадь
                                        <span>43,39 М²</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="pu_flat_r"><img src="img/pu_flat_img1.png" /></div>
                        </div>
                        <form class="pu_form">
                            <div class="pu_form__title">Узнайте стоимость квартиры на сегодня</div>
                            <div class="in_2">
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_name.png" /></i>
                                        <input type="text" value="Алексей" data="Алексей" />
                                    </label>
                                </div>
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_phone.png" /></i>
                                        <input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" inputmode="text" />
                                    </label>
                                </div>
                            </div>
                            <button class="btn_form">Отправить</button>
                        </form>
                    </div>
                    {/* pu */}
                    <div style="display: none;" class="pu_inner pu_ipoteka">
                        <div class="closeform"><img src="img/closeform.svg" /></div>
                        <div class="pu_title">
                            Получите расчет ежемесячного платежа по ипотеке с господдержкой
                        </div>
                        <form class="pu_form">
                            <div class="in_2">
                                <div class="in_2_inner">
                                    <label class="in_style in_select">
                                        <select>
                                            <option>Первоначальный взнос</option>
                                            <option>300 000</option>
                                            <option>500 000</option>
                                            <option>800 000</option>
                                            <option>4 300 000</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="in_2_inner">
                                    <label class="in_style in_select">
                                        <select>
                                            <option>На срок</option>
                                            <option>5 лет</option>
                                            <option>10 лет</option>
                                            <option>15 лет</option>
                                            <option>20 лет</option>
                                            <option>30 лет</option>
                                        </select>
                                    </label>
                                </div>
                            </div>

                            <div class="in_2">
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_name.png" /></i>
                                        <input type="text" value="Алексей" data="Алексей" />
                                    </label>
                                </div>
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_phone.png" /></i>
                                        <input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" inputmode="text" />
                                    </label>
                                </div>
                            </div>
                            <button class="btn_form">Отправить</button>
                        </form>
                    </div>
                    {/* pu */}
                    <div style="display: none;" class="pu_inner pu_good">
                        <div class="closeform"><img src="img/closeform.svg" /></div>
                        <div class="pu_title">
                            Спасибо
                            <span>
                                В ближайшее время с вами свяжется наш специалист
                            </span>
                        </div>
                        <div class="pu_btn_center">
                            <div class="btn_form">Закрыть</div>
                        </div>
                    </div>
                    {/* pu */}
                    <div style="display: none;" class="pu_inner pu_plan_main">
                        <div class="closeform"><img src="img/closeform.svg" /></div>
                        <div class="pu_title">
                            Планировка <br />1 корпуса
                        </div>
                        <div class="pu_plan_nav">
                            <div class="flat__nav_room">
                                <div class="act">Подьезд 1</div>
                                <div>Подьезд 2</div>
                            </div>
                            <div class="flat__nav_etaj">
                                <div class="flat__nav_name">Выберите этаж</div>
                                <div id="slid__etaj_popup" class="slid"></div>
                            </div>
                        </div>
                        <div class="pu_plan_img ppi_p1">
                            <div class="ppi_b ppi_b1"></div>
                            <div class="ppi_b ppi_b2"></div>
                            <div class="ppi_b ppi_b3"></div>
                            <div class="ppi_b ppi_b4"></div>
                            <div class="ppi_b ppi_b5"></div>
                            <div class="ppi_b ppi_b6"></div>
                            <div class="ppi_b ppi_b7"></div>
                            <div class="ppi_b ppi_b8"></div>
                            <div class="ppi_b ppi_b9"></div>
                            <div class="ppi_b ppi_b10"></div>
                            <img src="img/pu_plan_main.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end pu_rgba */}
    </section>
    )
}