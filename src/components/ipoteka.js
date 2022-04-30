const Ipoteka = () => {
    const showPopup = (event) => {

        document.querySelector('.pu_rgba').style.display = "block"
        document.querySelectorAll('.pu_inner').forEach(el => {
            el.style.display = "none"
        })
        document.querySelector('.pu_ipoteka').style.display = "block"
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.pu_ipoteka .pu_title').innerHTML = "Получите расчет ежемесячного платежа по ипотеке - " + event.currentTarget.getAttribute('data')
        document.querySelector('.pu_ipoteka .text').value = "Получите расчет ежемесячного платежа по ипотеке - " + event.currentTarget.getAttribute('data')
    }

    return (<section className="ipoteka plr">
        <div className="wmain">
            <div className="ipoteka__head">
                <div className="tm">
                    Выгодная <br />ипотека
                </div>
                <div className="ipoteka__head_info">
                    Для покупателей квартир в нашем комплексе доступны различные ипотечные программы, а также покупка с использованием материнского капитала и военная ипотека.
                </div>
            </div>
            <ul className="ipoteka__list">
                <li data={"Ипотека"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico1.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                Ипотека 4.99% для всех
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li>
                {/* <li data={"С господдержкой"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico5.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                С господдержкой
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li> */}
                <li data={"семейная"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico3.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                семейная ипотека от 2,5%
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li>
                {/* <li data={"без первого взноса"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico4.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                без первого взноса
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li> */}
                {/* <li data={"с господдержкой от 4,7%"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico5.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                с господдержкой <br />от 4,7%
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li> */}
                <li data={"военная"} onClick={showPopup}>
                    <div className="ipoteka__list_item">
                        <div className="ipoteka__list_ico"><img src="img/ipoteka_list_ico6.png" /></div>
                        <div className="ipoteka__list_content">
                            <div className="ipoteka__list_name">
                                военная ипотека
                            </div>
                            <div className="ipoteka__list_btn">Подробнее</div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="ipoteka__logo_main">
                <div className="ipoteka__logo">
                    <span><img src="img/bank_logo1.png" /></span>
                    <span><img src="img/bank_logo2.png" /></span>
                    <span><img src="img/bank_logo3.png" /></span>
                    <span><img src="img/bank_logo4.png" /></span>
                    <span><img src="img/bank_logo5.png" /></span>
                    <span><img src="img/bank_logo6.png" /></span>
                    <span><img src="img/bank_logo7.png" /></span>
                    <span><img src="img/bank_logo8.png" /></span>
                    <span><img src="img/bank_logo9.png" /></span>
                    <span><img src="img/bank_logo10.png" /></span>
                    <span><img src="img/bank_logo11.png" /></span>
                </div>
            </div>
        </div>
    </section>)
}

export default Ipoteka