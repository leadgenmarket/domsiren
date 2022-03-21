import { React, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from '@material-ui/core/Slider';
import parse from "html-react-parser";

const Plan_price = () => {
	const [flats, setFlats] = useState([])
	const [floor, setFloor] = useState([4, 17]);
	const [type, setType] = useState("all")
	const [swiper, setSwiper] = useState()

	const handleChange = (event, newValue) => {
		setFloor(newValue);
	};

	const typeClick = (type) => {
		setType(type)

	}

	const kvTitle = (classKv) => {
		switch (classKv) {
			case 0:
				return "Квартира-студия"
			case 1:
				return "1-комнатная Квартира"
			case 2:
				return "2-комнатная Квартира"
			case 3:
				return "3-комнатная Квартира"
		}
	}
	const kvTitlePopup = (classKv) => {
		switch (classKv) {
			case 0:
				return "Квартира-студия"
			case 1:
				return "Однокомнатная Квартира"
			case 2:
				return "Двухкомнатная Квартира"
			case 3:
				return "Трехкомнатная Квартира"
		}
	}

	const flatClick = (e) => {
		e.preventDefault()
		let id = parseInt(e.currentTarget.getAttribute('id'))
		let flat
		const headers = { 'Content-Type': 'application/json' }
		fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php?ID=" + id, headers)
			.then(res => res.json())
			.then((result) => {
				flat = result
				console.log(result)
				document.querySelector('.pu_rgba').style.display = "block"
				document.querySelectorAll('.pu_inner').forEach(el => {
					el.style.display = "none"
				});
				document.querySelector('.pu_flat').style.display = "block"
				document.querySelector('body').classList.add('overflow')
				document.querySelector('#sq_all').innerHTML = flat.info + " М²"
				document.querySelector('#sq_zhil').innerHTML = flat.zhil + " М²"
				document.querySelector('.pu_flat .pu_title').innerHTML = parse(kvTitlePopup(flat.class))
				document.querySelector('.pu_flat .pu_flat_r img').setAttribute('src', process.env.REACT_APP_BACKEND_URL + "/" + flat.img)
				document.querySelector('.pu_flat input.text').value = `Узнать стоимость квратиры: Кол-во комнат - ${flat.class} Этаж - ${floor[0]}:${floor[1]}  Жилая площадь - ${flat.info}`
			})
	}



	useEffect(() => {
		fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php", {})
			.then(res => res.json())
			.then((result) => {
				let flats = []
				result.map((flat) => {
					let floors = []
					if (flat.floors != "") {
						let tmpFloor = flat.floors.split(',')
						tmpFloor.forEach((fl)=>{
							floors.push(parseInt(fl))
						})
					}
					flat.floors = floors
					flats.push(flat)
				})
				setFlats(flats)
			})
	}, [])

	const checkFloorsInRange = (floors) => {
		let flag = false
		floors.forEach(fl=>{
			if (fl >= floor[0] && fl <= floor[1]) {
				flag = true
			}
		})
		return flag
	}
	return (<section className="flat plr">
		<div className="wmain">
			<div className="tm">Выберите квартиру</div>
			<div className="tm__dop">по нужным параметрам</div>
			<div className="flat__nav">
				<div className="flat__nav_room">
					<div className={type == "all" ? "act" : ""} onClick={() => typeClick("all")}>Все</div>
					<div className={type == "0" ? "act" : ""} onClick={() => typeClick("0")}>Студии</div>
					<div className={type == "1" ? "act" : ""} onClick={() => typeClick("1")}>1 - КОМ</div>
					<div className={type == "2" ? "act" : ""} onClick={() => typeClick("2")}>2 - КОМ</div>
					<div className={type == "3" ? "act" : ""} onClick={() => typeClick("3")}>3 - КОМ</div>
				</div>
				<div className="flat__nav_etaj">
					<div className="flat__nav_name">Выберите этаж</div>
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
			<Swiper
				speed={600}
				slidesPerView={4}
				spaceBetween={0}
				loop={false}
				autoHeight={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => setSwiper(swiper)}
				className={"flat__list"}
				breakpoints={{
					550: {
						width: 550,
						slidesPerView: 2,
						spaceBetween: 20
					},
					820: {
						width: 820,
						slidesPerView: 3,
						spaceBetween: 20
					},
					1200: {
						width: 1200,
						slidesPerView: 4,
						spaceBetween: 19
					}
				}}
			>
				{flats.map((flat) => {
					if ((type == "all" || flat.rooms == type) && checkFloorsInRange(flat.floors)) {
						return <SwiperSlide onClick={flatClick} id={flat.id}>
							<div className="flat__item">
								<div className="flat__item_img"><img src={process.env.REACT_APP_PLANS_URL + flat.photo} /></div>
								<div className="flat__item_content">
									<div className="flat__item_content_head">
										<div className="flat__item_name">
											{kvTitle(flat.rooms)}
										</div>
										<div className="flat__item_area">
											площадь
											<span>{flat.total_area} м²</span>
										</div>
									</div>
									<div className="flat__item_btn">
										Узнать стоимость<img src="img/btn_coast_str.png" />
									</div>
								</div>
							</div>
						</SwiperSlide>
					}
				})}

			</Swiper>
			<div className="flat__list_nav">
				<div className="slider_str slider_str_l" onClick={() => { swiper.slidePrev() }}><img src="img/slider_str_l.png" /></div>
				<div className="slider_str slider_str_r" onClick={() => { swiper.slideNext() }}><img src="img/slider_str_r.png" /></div>
			</div>
		</div>

	</section >
	)
}

export default Plan_price