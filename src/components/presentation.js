
import React, { useContext } from 'react'

const Presentation = () => {
    return (
        <div className="get_present plr">
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
                                <input type="text" value="Алексей" data="Алексей" />
                            </label>
                        </div>
                        <div className="in_item">
                            <label className="in_style">
                                <i><img src="img/in_mail.png" /></i>
                                <input type="text" value="Ваш e-mail" data="Ваш e-mail" />
                            </label>
                        </div>
                        <div className="in_item">
                            <label className="in_style">
                                <i><img src="img/in_phone.png" /></i>
                                <input className="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" />
                            </label>
                        </div>
                    </div>
                    <div className="alicen_center">
                        <button className="btn_form">
                            <img src="img/btn_get-present_ico.png" />
                            <span>Получить презентацию</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Presentation