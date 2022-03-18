import { React, useEffect, useState } from "react"
import Slider from '@material-ui/core/Slider';
import { useSendForm } from '../hooks/send-from.hook'
import { PhoneInput } from "./phone_input";

const Podbor = () => {
    const [floor, setFloor] = useState([4, 17]);
    const [type, setType] = useState("все")
    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };
    const typeClick = (type) => {
        setType(type)
    }
    const sendForm = useSendForm();

    return (<section class="get_flat plr">
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
                        <div className={type == "все" ? "act" : ""} onClick={() => typeClick("все")}>Все</div>
                        <div className={type == "студии" ? "act" : ""} onClick={() => typeClick("студии")}>Студии</div>
                        <div className={type == "1 - КОМ" ? "act" : ""} onClick={() => typeClick("1 - КОМ")}>1 - КОМ</div>
                        <div className={type == "2 - КОМ" ? "act" : ""} onClick={() => typeClick("2 - КОМ")}>2 - КОМ</div>
                        <div className={type == "3 - КОМ" ? "act" : ""} onClick={() => typeClick("3 - КОМ")}>3 - КОМ</div>
                    </div>
                    <div class="flat__nav_etaj">
                        <div class="flat__nav_name">Выберите этаж</div>
                        <Slider className="slid"
                            //defaultValue={floor}
                            value={floor}
                            step={1}
                            min={1}
                            max={22}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                        />
                    </div>
                </div>
                <div class="in_3">
                    <div class="in_item">
                        <label class="in_style">
                            <i><img src="img/in_name.png" /></i>
                            <input type="text" name="name" placeholder="Ваше имя" />
                        </label>
                    </div>
                    <div class="in_item">
                        <label class="in_style">
                            <i><img src="img/in_mail.png" /></i>
                            <input type="text" name="email" placeholder="Ваш e-mail" />
                        </label>
                    </div>
                    <div class="in_item">
                        <label class="in_style">
                            <i><img src="img/in_phone.png" /></i>
                            <PhoneInput />
                        </label>
                    </div>
                </div>
                <input type="hidden" className="text" value={'Получить подборку свободных квартир. Кол-во комнат: ' + type + '; Этажи ' + floor[0] + " - " + floor[1]} />
                <div class="alicen_center">
                    <button class="btn_form" onClick={sendForm.sendForm} celtype={"getPodbor"}>
                        <img src="img/btn_get_flat_ico.png" />
                        <span>Получить подборку</span>
                    </button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Podbor