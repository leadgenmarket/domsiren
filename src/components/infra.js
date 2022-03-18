import React, { useContext } from 'react'

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
                <div className="infra_content__list_info">
                    <img src="img/infra_map_ico.png" />
                    <span>
                        а также в пешей доступности кинотеатр, железнодорожная станция, магазины, аптеки, кафе и рестораны.
                    </span>
                </div>
            </div>
        </div>
    </div>)
}