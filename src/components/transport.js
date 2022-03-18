import React from "react"
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

const Transport = () => {
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
          <div className="transport__nav_item transport__nav_item_act">
            <i>
              <img src="img/infra_ico1.png" />
              <img src="img/infra_ico1_act.png" />
            </i>
            <span>
              на автомобиле
            </span>
          </div>
          <div className="transport__nav_item">
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
      <YMaps>
        <Map defaultState={{ 
          center: [56.21957776157439,36.74674900061031], 
          zoom: 9.5, 
          controls: [],
          scrollzoom: false,
        }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
            <ZoomControl options={{ float: 'left' }} />
            <Placemark geometry={[55.89037001197428,37.72589476591486]}
                options={{
                    iconLayout: 'default#image',
                    hideIconOnBalloonOpen: false,
                    iconImageSize: [90, 82],
                    iconImageOffset: [-45, -63],
                    cursor: 'default',
                    iconShadow: true,
                    balloonclose: true,
                    iconImageHref: 'img/map_ico.png',
                    balloonPanelMaxMapArea: 0,
                    scrollzoom: false,
                }}
            />
            <Placemark geometry={[56.355215,37.550136]}
                options={{
                    iconLayout: 'default#image',
                    hideIconOnBalloonOpen: false,
                    iconImageSize: [90, 82],
                    iconImageOffset: [-45, -63],
                    cursor: 'default',
                    iconShadow: true,
                    balloonclose: true,
                    iconImageHref: 'img/map_ico.png',
                    balloonPanelMaxMapArea: 0,
                    scrollzoom: false,
                }}
            />
        </Map>
      </YMaps>
    </div>
  </div>
</section>)
}

export default Transport