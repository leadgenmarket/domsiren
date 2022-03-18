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
                    квартиры от
                    <span>4.1</span>
                    млн. ₽
                </div>
            </div>
        </div>
    </div>
    )
}