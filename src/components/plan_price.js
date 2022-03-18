import { React, useEffect, useState } from "react"
import Slider from '@material-ui/core/Slider';
import Slider1 from '@material-ui/core/Slider';

const Plan_price = () => {
    const url = "https://sunny-park.ru/"
    const [floor, setFloor] = useState([4, 15]);
    const [area, setArea] = useState([27, 84]);
    const [flats, setFlats] = useState([])
    const [filteredFlats, setFilteredFlats] = useState([])
    const [rooms, setRooms] = useState("all")
    const [flatsToShow, setFlatsToShow] = useState(4)
    const [hideMore, setHideMore] = useState(false)
    const [otdelka, setOtdelka] = useState(null)

    const showPopup = (e) => {
        e.preventDefault()

    }


    const handleChange = (event, newValue) => {
        setFloor(newValue);
    };
    const handleChange1 = (event, newValue) => {
        setArea(newValue);
        setFlatsToShow(4)
        filterFlats(flats, newValue, rooms, 4, otdelka)
    };

    const kvTitle = (classKv) => {
        switch (classKv) {
            case "0":
                return "Квартира-студия"
            case "1":
                return "1-k Квартира"
            case "2":
                return "2-k Квартира"
            case "3":
                return "3-k Квартира"
        }
    }

    const moreClick = (e) => {
        e.preventDefault()
        setFlatsToShow(flatsToShow + 4)
        filterFlats(flats, area, rooms, flatsToShow + 4, otdelka)
    }

    const filterFlats = (flats, area, rooms, flatsToShow, otdelka) => {
        const newFlats = []
        let flatsCh = flats.filter((flat) => parseFloat(flat.info) >= area[0] && parseFloat(flat.info) <= area[1] && (rooms == "all" || rooms == flat.class) && (otdelka === null || otdelka === flat.otdelka))
        if (flatsCh.length <= flatsToShow) {
            setHideMore(true)
        } else {
            setHideMore(false)
        }
        Object.keys(flatsCh).map((key) => {
            if (key < flatsToShow) {
                newFlats.push(flatsCh[key])
            }
        })
        console.log(flatsToShow)
        setFilteredFlats(newFlats)
    }

    const roomsClick = (event) => {
        setRooms(event.target.getAttribute('data'))
        setFlatsToShow(4)
        filterFlats(flats, area, event.target.getAttribute('data'), 4, otdelka)
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = parseInt(e.currentTarget.getAttribute('id'))
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(url + "/flats_react.php?id=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelectorAll('.popup_main').forEach(el => {
                    el.style.display = "none"
                });
                document.querySelector('.popup_rgba').style.display = "block"
                document.querySelector('.pu_liter').style.display = "none"
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('.pu_flat .flat_img img').setAttribute('src', url + '/' + result.img)
                document.querySelector('.pu_flat .pu_tm l').innerHTML = kvTitle(result.class)
                document.querySelector('.area span i').innerHTML = flat.info
                document.querySelectorAll('.area span i')[1].innerHTML = flat.zhil
                document.querySelector('.pu_flat input.text').value = `Узнать стоимость квратиры Литер - ${document.querySelector('.pu_liter').getAttribute('liter')} Этаж - ${floor[0]}:${floor[1]}  Жилая площадь - ${flat.info}`
                document.querySelector('body').classList.add('overflow')
            })
    }



    useEffect(() => {
        fetch(url + "/flats_react.php", {})
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setFlats(result)
                filterFlats(result, area, rooms, flatsToShow, otdelka)
            })
    }, [])
    return (<section className="flat plr">
            <div className="wmain">
            	<div className="tm">Выберите квартиру</div>
            	<div className="tm__dop">по нужным параметрам</div>
            	<div className="flat__nav">
        			<div className="flat__nav_room">
        				<div>все</div>
        				<div className="act">студии</div>
        				<div>1 - ком</div>
        				<div>2 - ком</div>
        				<div>3 - ком</div>
        			</div>
        			<div className="flat__nav_etaj">
        				<div className="flat__nav_name">Выберите этаж</div>
        				<div id="slid__etaj" className="slid"></div>
        			</div>
        		</div>
        		<div className="flat__list swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
						<div className="swiper-slide">
							<div className="flat__item">
	        					<div className="flat__item_img"><img src="img/flat_img1.png" /></div>
	        					<div className="flat__item_content">
	        						<div className="flat__item_content_head">
	        							<div className="flat__item_name">
	        								1-комнатная Квартира
	        							</div>
	        							<div className="flat__item_area">
	        								площадь
	        								<span>67.5 м²</span>
	        							</div>
	        						</div>
	        						<div className="flat__item_btn">
	        							Узнать стоимость<img src="img/btn_coast_str.png" />
	        						</div>
	        					</div>
	        				</div>
						</div>
					</div>
					<div className="flat__list_nav">
						<div className="slider_str slider_str_l"><img src="img/slider_str_l.png" /></div>
						<div className="slider_str slider_str_r"><img src="img/slider_str_r.png" /></div>
					</div>
				</div>
        	</div>
        </section>
    )
}

export default Plan_price