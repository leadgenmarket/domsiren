import React, { useContext } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Header = () => {
    return (<div className="header plr">
        <div className="header_center">
            <h1>
                Квартиры <br />в новом доме
            </h1>
            <div className="head_slogan">
                <img src="img/head_plashka_ico.png" />
                комфорт-класса в развитом районе г. Щелково
            </div>
            <div className="head_price">
                <div>
                    ипотека
                    <span>4.99%</span>
                    для всех
                </div>
            </div>
            <div className='header_center__plashka_main'>
                <div className='header_center__plashka'>
                    <span>От <b>18 700</b> руб./мес.</span>
                    <span>при первоначальном взносе <b>20%</b></span>
                </div>
            </div>
        </div>
    </div>
    )
}