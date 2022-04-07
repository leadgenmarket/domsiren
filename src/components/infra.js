import React, { useContext } from 'react'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

export const Infra = () => {
    return (<div className="infra">
        <div className="infra_head plr">
            <div className="infra_head__inner">
                <div className="infra_head__inner_l">
                    <div className="infra_head__inner_l_content">
                        <div className="infra_head__title">
                            Развитый<br />микрорайон
                        </div>
                        <div className="infra_head__title_dop">
                            с готовой инфраструктурой
                        </div>
                    </div>
                </div>
                <div className="infra_head__inner_r"></div>
            </div>
        </div>
        <div className="plr">
            <div className="infra_content">
                <ul className="infra_content__list">
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
                        <span>минут пешком до супермаркетов “Магнит” и “Пятерочка”</span>
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
                        <span>минут пешком до гипермаркета “Глобус”</span>
                    </li>
                </ul>
                <div className="infra_content__list_info">
                    <img src="img/infra_map_ico.png" />
                    <span>
                        а также в пешей доступности кинотеатр, железнодорожная станция, магазины, аптеки, кафе и рестораны.
                    </span>
                </div>
                <div className='infra_map'>
                <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.9273572504225,37.99113621997555], zoom: 15, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                {/* касторама */}
                                <Placemark geometry={[55.93190869452924,38.005329648101785]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico10.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Глобус */}
                                <Placemark geometry={[55.92917727364709,38.003548661315904]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* парки */}
                                <Placemark geometry={[55.93925576893626,38.00584463223265]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92446986200371,37.99020735367583]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92413854460977,37.98677412613677]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.9234096363312,37.996151128852816]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93040574103741,38.0023110346481]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* аптеки */}
                                
                                <Placemark geometry={[55.92046409102028,37.98784091871799]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92190747812188,37.987812422752334]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92850568189728,37.99743858917997]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92941801900482,37.992304106305944]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93145555306118,38.002690828138405]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.925532826190974,37.99750988051145]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92724052460624,37.98562233015745]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92735195908971,37.986008568255606]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92713210155671,37.98602466150968]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92765313175928,37.98375014826507]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.9278820214161,37.983202977626014]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.9295148913776,37.98053149744719]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92991241652214,37.98288111254423]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93141627430967,37.98857276007382]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92315148153914,38.00258603000637]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Детские сады */}
                                
                                <Placemark geometry={[55.93224831634817,38.001121516074726]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93146884857516,37.99215390260111]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92925557506334,37.997545877540574]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93374484150185,37.99507288082885]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92842737895931,37.99080280407714]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92657215518171,37.99713281735229]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* школы */}
                                
                                <Placemark geometry={[55.93041080064885,37.99434489645066]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92307393091763,37.98032487969879]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93041200824678,37.994332591140726]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93778133794463,37.99279567874913]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92732509766332,37.994418421829195]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92640927344139,37.992043538539114]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93137712581371,37.98670057818144]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.9250671081453,37.99056973361963]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92209121964912,38.001845740318245]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92095863500285,37.998959683418235]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* ресторан */}
                                
                                <Placemark geometry={[55.91930488124287,37.99326267147059]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92224861427732,37.98234726529601]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.929134134952584,37.995706704136914]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.9266392966737,37.98657324218745]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92672965038997,37.98958804512019]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92447676794352,37.991556786537124]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico13.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* кинотеатр */}
                                <Placemark geometry={[55.924035160383205,38.00150564002711]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico12.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                 <Placemark geometry={[55.92129547024167,37.99161746901096]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico12.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* пятерочки */}
                                <Placemark geometry={[55.93149123932957,37.99696115597534]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92962769949759,37.992851276945]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* магнит */}
                                <Placemark geometry={[55.9334749582184,37.99680022343445]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico3.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                
                                {/* магазины */}
                                
                                <Placemark geometry={[55.92498490430498,38.01206735714722]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico3.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                
                                <Placemark geometry={[55.92819382246662,38.002490119923735]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92842799236647,37.98221771905124]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93347391889448,37.99680852397878]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                
                                <Placemark geometry={[55.92223656572852,37.98483099084382]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92340579396429,37.9860872201866]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.922225053705745,37.984821217531575]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93230106623437,37.991223904266405]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.930020329743705,37.98906399781597]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93421322748284,37.99333212055213]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92918198591995,37.99393488938701]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92557222485684,37.98983720883178]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92965888178227,37.99922649428099]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.932292587938264,37.99121741816252]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92477708104569,37.99474028691099]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.928128979786344,38.00836209818572]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.927780188274255,37.9810196594879]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.93042550400182,37.9845333532974]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                <Placemark geometry={[55.92414243862004,38.00703849697108]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico4.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Остановки */}
                                <Placemark geometry={[55.91911723193455,37.97392098053741]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 46],
                                        iconImageOffset: [-25, -37],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico2.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Дом */}
                                <Placemark geometry={[55.93392851263577,37.99402948736569]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [100, 89],
                                        iconImageOffset: [-50, -71],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico5.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                            </Map>
                        </div>
                </YMaps>
            </div>
            </div>
        </div>
    </div>)
}