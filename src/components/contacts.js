import React, { useEffect, useState } from 'react'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

const Contacts = () => {
    const [phone, setPhone] = useState("")
    useEffect(() => {
        setPhone(document.querySelector('.roistat-phone').innerHTML.split('>')[1])
    }, [])

    return (<section class="contact plr">
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
                            <a href={"tel:" + phone.replaceAll(" ", "").replaceAll("-", "").replaceAll("+", "") + "\""}>{phone}</a>
                        </div>
                    </li>
                    <li>
                        <div class="cont_list__title"><i><img src="img/cont_ico3.png" /></i>Время работы</div>
                        <div class="cont_list__info">
                            пн-сб:  10:00 - 21:00; <br />вс: 10:00 - 20:00
                        </div>
                    </li>
                </ul>
            </div>
            <div class="cont_r">
                <YMaps>
                    <div>
                        <Map defaultState={{ center: [55.926317, 37.962464], zoom: 16, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                            <Placemark geometry={[55.92626450507105,37.96327907672121]}
                                options={{
                                    iconLayout: 'default#image',
                                    hideIconOnBalloonOpen: false,
                                    iconImageSize: [90, 82],
                                    iconImageOffset: [-45, -54],
                                    cursor: 'default',
                                    iconShadow: true,
                                    balloonclose: true,
                                    iconImageHref: 'img/map_ico.png',
                                    balloonPanelMaxMapArea: 0,
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    </section>
    )
}

export default Contacts