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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico14.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* лесопарк */}
                                <Placemark geometry={[55.93925576893626,38.00584463223265]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico9.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* аптеки */}
                                <Placemark geometry={[55.92850568189728,37.99743858917997]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico7.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Детские сады */}
                                <Placemark geometry={[55.93146884857516,37.99215390260111]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico8.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* школы */}
                                <Placemark geometry={[55.93041200824678,37.994332591140726]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico1.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* ресторан */}
                                <Placemark geometry={[55.929134134952584,37.995706704136914]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico3.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* магазины */}
                                <Placemark geometry={[55.93230106623437,37.991223904266405]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/map_ico6.png',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                                {/* Остановки */}
                                <Placemark geometry={[55.91911723193455,37.97392098053741]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [90, 82],
                                        iconImageOffset: [-45, -54],
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
                                        iconImageSize: [130, 116],
                                        iconImageOffset: [-65, -91],
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