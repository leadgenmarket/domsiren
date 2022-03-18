
import React, { useContext } from 'react'
import { PhoneInput } from './phone_input'
import { useSendForm } from '../hooks/send-from.hook'

const Presentation = () => {
    const sendForm = useSendForm();
    return (
        <section className="get_present plr">
            <div className="wmain">
                <div className="tm__main">
                    <div className="tm">
                        Получите презентацию <br />объекта
                    </div>
                    <div className="tm__info">
                        <i><img src="img/btn_get_flat_ico.png" /></i>
                        <span>С планировками<br />и ценами</span>
                    </div>
                </div>
                <form className="form_style">
                    <div className="in_3">
                        <div className="in_item">
                            <label className="in_style">
                                <i><img src="img/in_name.png" /></i>
                                <input type="text" name="name" placeholder="Ваше имя" />
                            </label>
                        </div>
                        <div className="in_item">
                            <label className="in_style">
                                <i><img src="img/in_mail.png" /></i>
                                <input type="text" name="email" placeholder=" Ваш e-mail" />
                            </label>
                        </div>
                        <div className="in_item">
                            <label className="in_style">
                                <i><img src="img/in_phone.png" /></i>
                                <PhoneInput />
                            </label>
                        </div>
                    </div>
                    <input type="hidden" className="text" value="Заказать звонок" />
                    <div className="alicen_center">
                        <button className="btn_form" celtype={"getPresent"} onClick={sendForm.sendForm}>
                            <img src="img/btn_get-present_ico.png" />
                            <span>Получить презентацию</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Presentation