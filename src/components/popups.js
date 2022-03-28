import { React, useEffect, useState, useRef, useContext } from 'react';
import Slider from "react-slick"
import { useSendForm } from '../hooks/send-from.hook'
import { BlocksContext } from "../context/blocksContext"
import { FlatsContext } from '../context/flatsContext';
import "lightgallery.js/dist/css/lightgallery.css";
import { PhoneInput } from './phone_input';

export const Popups = () => {
    const url = "https://sunny-park.ru"
    const slider = useRef(null);
    const [counter, setCounter] = useState(1)
    const sendForm = useSendForm();
    const blocks = useContext(BlocksContext)
    const [floor, setFloor] = useState(5);
    const [srokIpot, setSrokIpot] = useState("")
    const [pervSrok, setPervSrok] = useState("")
    const [pervIpot, setPervIpot] = useState("")
    const [pervRassr, setPervRassr] = useState("")
    const [parking, setParking] = useState();
    const [parkingCounter, setParkingCounter] = useState(1)
    const [kellerCounter, setKellerCounter] = useState(1)
    const [questionText, setQuestionText] = useState("")
    const [keller, setKeller] = useState();
    const [time, setTime] = useState();
    const floorSelector = useRef(null);
    const close = (e) => {
        e.preventDefault()
        if (e.currentTarget.classList.contains("return")) {
            document.querySelector('.pu_liter').style.display = "block"
            document.querySelector('.pu_flat').style.display = "none"
            e.currentTarget.classList.remove("return")
        } else {
            document.querySelector('body').classList.remove('overflow')
            document.querySelector('.pu_rgba').style.display = "none"
            document.querySelectorAll('.pu_inner').forEach(el => {
                el.style.display = "none"
            });
        }
    }



    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };


    const flats = useContext(FlatsContext)

    function isDescendant(child) {
        var node = child.parentNode;
        while (node.classList != undefined) {
            if (node.classList.contains('pu_inner')) {

                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    var settingsKeller = {
        infinite: false,
        beforeChange: (current, next) => {
            setKellerCounter(next + 1)
        }
        // asNavFor
    };

    var settingsParking = {
        infinite: false,
        beforeChange: (current, next) => {
            setParkingCounter(next + 1)
        }
        // asNavFor
    };

    const clickMenu = (e) => {
        e.preventDefault()
        let popup = e.currentTarget.getAttribute("href")
        if (blocks.blocks < 20) {
            blocks.setMenuClick(true)
            blocks.setBlocks(20)
            setTimeout(() => {
                window.scrollTo({
                    top: document.querySelector("." + popup).offsetTop,
                    behavior: "smooth"
                })
                setTimeout(() => {
                    blocks.setMenuClick(false)
                }, 500)


            }, 2000)



        } else {
            window.scrollTo({
                top: document.querySelector("." + popup).offsetTop,
                behavior: "smooth"
            })
        }
        document.querySelector('body').classList.remove('overflow')
        document.querySelector('.pu_rgba').style.display = "none"
        document.querySelectorAll('.pu_inner').forEach(el => {
            el.style.display = "none"
        });

    }

    const textFieldChange = (e) => {
        setQuestionText(e.target.value)
    }

    const timeFieldChange = (e) => {
        setTime(e.target.value)
    }

    const kvTitle = (classKv) => {
        switch (classKv) {
            case "0":
                return "Квартира-студия"
            case "1":
                return "Однокомнатная"
            case "2":
                return "Двухкомнатная"
            case "3":
                return "Трехкомнатаная"
        }
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = parseInt(e.target.getAttribute('id'))
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(url + "/flats_react.php?id=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelector('.pu_liter').style.display = "none"
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('.pu_flat .closeform').classList.add('return')
                document.querySelector('.pu_flat .flat_img img').setAttribute('src', url + '/' + result.img)
                document.querySelector('.pu_flat .pu_tm l').innerHTML = kvTitle(result.class)
                document.querySelector('.area span i').innerHTML = flat.info
                document.querySelectorAll('.area span i')[1].innerHTML = flat.zhil
                document.querySelector('.pu_flat input.text').value = `Узнать стоимость квратиры Литер - ${document.querySelector('.pu_liter').getAttribute('liter')} Этаж - ${floor}  Жилая площадь - ${flat.info}`
            })
    }



    useEffect(() => {
        if (document.querySelector('.blocks') != null) {
            document.querySelector('.blocks').addEventListener('click', (e) => {
                let clicked = e.target
                if (!clicked.classList.contains('pu_inner') && !isDescendant(clicked) && e.target.nodeName.toLowerCase() != 'canvas') {
                    document.querySelector('body').classList.remove('overflow')
                    document.querySelector(".pu_rgba").style.display = "none";
                    document.querySelectorAll('.pu_inner').forEach(el => {
                        el.style.display = "none"
                    });
                }
            })
        }
    }, [])

    useEffect(() => {
        if (flats.activeFlat != null) {

            if (counter != 1) {
                slider.current.slickGoTo(0)
            }
            setTimeout(() => {
                document.querySelectorAll('.pu_plan_slid_wrap')[1].style.display = "block"
            }, 500)
        }
    }, [flats.activeFlat])

    const floorClick = (event) => {
        event.preventDefault()
        let floor = event.currentTarget.getAttribute('data')
        let liter = document.querySelector(".pu_floor .pu_tm span").innerText.split('№')[1];
        document.querySelectorAll('.floor_img').forEach((floor) => {
            floor.style.display = "none"
        })
        if (parseInt(floor) >= 10) {
            document.querySelector('.floor_img.l' + liter + "_e10_25").style.display = "inline-block"
        } else {
            document.querySelector('.floor_img.l' + liter + "_e" + floor).style.display = "inline-block"
        }
        document.querySelectorAll('.sel_fl_el').forEach((sel) => {
            sel.classList.remove('act')
        })
        event.currentTarget.classList.add('act')
    }

    const floorSelect = (event) => {
        const floor = event.target.value.split(' ')[0]

        let liter = document.querySelector(".pu_floor .pu_tm span").innerText.split('№')[1];

        console.log('.floor_img.l' + liter + "_e" + floor)
        document.querySelectorAll('.floor_img').forEach((floor) => {
            floor.style.display = "none"
        })
        if (parseInt(floor) >= 10) {
            document.querySelector('.floor_img.l' + liter + "_e10_25").style.display = "inline-block"
        } else {
            //console.log(document.querySelector('.floor_img.l'+liter+"_e"+floor))
            document.querySelector('.floor_img.l' + liter + "_e" + floor).style.display = "inline-block"
        }
        document.querySelectorAll('.sel_fl_el').forEach((sel) => {
            sel.classList.remove('act')
        })
    }

    var settings = {
        beforeChange: (current, next) => {
            setCounter(next + 1)
        }
        // asNavFor
    };

    const entranceClick = (e) => {
        let liter = document.querySelector('.pu_liter').getAttribute('liter')
        let entrance = e.target.getAttribute('data')
        document.querySelectorAll('.entr_in').forEach((el) => {
            el.classList.remove('act')
        })
        e.currentTarget.classList.add('act')
        document.querySelectorAll('.pu_liter .liter_img').forEach((el) => {
            el.style.display = "none"
        })
        document.querySelector('.pu_liter .liter_img[data="' + liter + '"][entrance="' + entrance + '"]').style.display = 'block'
    }


    return (
        <section className="pu_rgba plr" style={{ display: "none" }}>
            <div className="pu_table">
                <div className="pu_cell">

                    <div className="pu_inner popup_menu" style={{ display: "none" }}>
                        <a href="#" className="closeform" onClick={close}></a>
                        <div className="menu_list">
                            <a href="near_house" onClick={clickMenu}><span>Ипотека</span></a>
                            <a href="plan_price" onClick={clickMenu}><span>Планировки и цены</span></a>
                            <a href="how_buy" onClick={clickMenu}><span>Инфраструктура</span></a>
                            <a href="contacts" onClick={clickMenu}><span>Контакты</span></a>
                        </div>
                    </div>


                    <div style={{ display: "none" }} className="pu_inner pu_good pu_thx">
                        <div className="closeform" onClick={close}><img src="img/closeform.svg" /></div>
                        <div className="pu_title">
                            Спасибо
                            <span>
                                В ближайшее время с вами свяжется наш специалист
                            </span>
                        </div>
                        <div className="pu_btn_center">
                            <div className="btn_form" onClick={close}>Закрыть</div>
                        </div>
                    </div>

                    <div style={{ display: "none" }} className="pu_inner pu_ipoteka">
                        <div className="closeform" onClick={close}><img src="img/closeform.svg" /></div>
                        <div className="pu_title">
                            Получите расчет ежемесячного платежа по ипотеке с господдержкой
                        </div>
                        <form className="pu_form">
                            <div className="in_2">
                                <div className="in_2_inner">
                                    <label className="in_style in_select">
                                        <select onChange={(event) => { setPervIpot(event.target.value) }}>
                                            <option value={""}>Первоначальный взнос</option>
                                            <option value={"10%"}>10%</option>
                                            <option value={"20%"}>20%</option>
                                            <option value={"30%"}>30%</option>
                                            <option value={"40%"}>40%</option>
                                            <option value={"50%"}>50%</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="in_2_inner">
                                    <label className="in_style in_select">
                                        <select onChange={(event) => { setSrokIpot(event.target.value) }}>
                                            <option value={""}>На срок</option>
                                            <option value={"5 лет"}>5 лет</option>
                                            <option value={"10 лет"}>10 лет</option>
                                            <option value={"15 лет"}>15 лет</option>
                                            <option value={"20 лет"}>20 лет</option>
                                            <option value={"25 лет"}>25 лет</option>
                                            <option value={"30 лет"}>30 лет</option>
                                        </select>
                                    </label>
                                </div>
                            </div>

                            <div className="in_2">
                                <div className="in_2_inner">
                                    <label className="in_style">
                                        <i><img src="img/in_name.png" /></i>
                                        <input type="text" name="name" placeholder="Ваше имя" />
                                    </label>
                                </div>
                                <div className="in_2_inner">
                                    <label className="in_style">
                                        <i><img src="img/in_phone.png" /></i>
                                        <PhoneInput />
                                    </label>
                                </div>
                            </div>
                            <input type="hidden" className="dop-info" data="Первоначальный взнос: " value={pervIpot} />
                            <input type="hidden" className="dop-info" data="Срок: " value={srokIpot} />
                            <input type="hidden" className="text" value='Получить расчет' />
                            <button className="btn_form" celtype={"getIpoteka"} onClick={sendForm.sendForm}>Отправить</button>
                        </form>
                    </div>

                    <div style={{ display: "none" }} class="pu_inner pu_flat">
                        <div onClick={close} class="closeform"><img src="img/closeform.svg" /></div>
                        <div class="pu_title">
                            Двухкомнатная <br />квартира:
                        </div>
                        <div class="pu_flat">
                            <div class="pu_flat_l">
                                <ul class="pu_flat_info">
                                    <li>
                                        Общая площадь
                                        <span id="sq_all">73,39 М²</span>
                                    </li>
                                    <li>
                                        Жилая площадь
                                        <span id="sq_zhil">43,39 М²</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="pu_flat_r"><img src="img/pu_flat_img1.png" /></div>
                        </div>
                        <form class="pu_form">
                            <div class="pu_form__title">Узнайте стоимость квартиры на сегодня</div>
                            <div class="in_2">
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_name.png" /></i>
                                        <input type="text" name="name" placeholder="Ваше имя" />
                                    </label>
                                </div>
                                <div class="in_2_inner">
                                    <label class="in_style">
                                        <i><img src="img/in_phone.png" /></i>
                                        <PhoneInput />
                                    </label>
                                </div>
                            </div>
                            <input type="hidden" className="text" value='Узнать стоимость квартиры' />
                            <button class="btn_form" celtype={"getFlatCoast"} onClick={sendForm.sendForm}>Отправить</button>
                        </form>
                    </div>

                    <div style={{ display: "none" }} className="pu_inner pu_plan_main">
                        <div className="closeform" onClick={close}><img src="img/closeform.svg" /></div>
                        <div className="pu_title">
                            Планировка <br /><k>1</k> корпуса
                        </div>
                        <div className="pu_plan_nav">
                            <div className="flat__nav_room">
                                <div className="act">Подьезд 1</div>
                                <div>Подьезд 2</div>
                            </div>
                            <div className="flat__nav_etaj">
                                <div className="flat__nav_name">Выберите этаж</div>
                                <Slider className="slid"
                                    //defaultValue={floor}
                                    value={floor}
                                    step={1}
                                    min={2}
                                    max={17}
                                    onChange={handleChange}
                                    valueLabelDisplay="on"
                                />
                            </div>
                        </div>
                        <div className="pu_plan_img ppi_p1">
                            <div className="ppi_b ppi_b1"></div>
                            <div className="ppi_b ppi_b2"></div>
                            <div className="ppi_b ppi_b3"></div>
                            <div className="ppi_b ppi_b4"></div>
                            <div className="ppi_b ppi_b5"></div>
                            <div className="ppi_b ppi_b6"></div>
                            <div className="ppi_b ppi_b7"></div>
                            <div className="ppi_b ppi_b8"></div>
                            <div className="ppi_b ppi_b9"></div>
                            <div className="ppi_b ppi_b10"></div>
                            <img src="img/pu_plan_main.png" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}