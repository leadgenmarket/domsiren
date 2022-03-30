import React, { useState } from "react"
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

const Transport = () => {
  const [activeMap, setActiveMap] = useState(0)
  const widgets = [
    "https://yandex.ru/map-widget/v1/-/CCUBVFf2pC",
    "https://yandex.ru/map-widget/v1/-/CCUBVFvkWB"
  ]
  return (<section className="transport plr">
    <div className="wmain">
      <div className="transport__l">
        <div className="tm">
          Удобная транспортная <br />инфраструктура
        </div>
        <div className="transport__bg">
          <div className="tm__dop">
            В пешей доступности расположена станция Воронок, <br />которая к 2030 году войдет в систему наземного метро МЦД 51.
          </div>
          <div className="transport__nav">
            <div className={activeMap == 0 ? "transport__nav_item transport__nav_item_act" : "transport__nav_item"} onClick={() => setActiveMap(0)}>
              <i>
                <img src="img/infra_ico1.png" />
                <img src="img/infra_ico1_act.png" />
              </i>
              <span>
                на автомобиле
              </span>
            </div>
            <div className={activeMap == 1 ? "transport__nav_item transport__nav_item_act" : "transport__nav_item"} onClick={() => setActiveMap(1)}>
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
      <div className="transport__r">
        <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", marginLeft: "170px" }}><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px", width: "100%", height: "100%" }}>Яндекс Карты</a><a href="https://yandex.ru/maps/?ll=37.933435%2C55.877111&mode=usermaps&source=constructorLink&um=constructor%3A41b2d2514516c6093dd5c7934c970792419aec2c58639bd3f68fea6e4ed78e9e&utm_medium=mapframe&utm_source=maps&z=12" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src={widgets[activeMap]} width="1920" height="1080" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe></div>
      </div>
    </div>
  </section>)
}

export default Transport