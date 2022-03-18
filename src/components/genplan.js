import { React, useEffect, useState } from "react"

const Genplan = () => {
	const [hovered, setHovered] = useState(false)
	
	const mouseEnter = (e) => {
		setHovered(e.target.attrs.liter)
		console.log('enter')
		const container = e.target.getStage().container();
		container.style.cursor = "pointer"
	}
	const mouseLeave = (e) => {
		const container = e.target.getStage().container();
		container.style.cursor = "default"
		setHovered(false)
	}

	const contHover = (e) => {
		setHovered(parseInt(e.target.getAttribute('data-liter')))
	}
	const contLeave = (e) => {
		setHovered(false)
	}

	const contClick = (e) => {
		const liter = e.target.getAttribute('data-liter')
		if (liter != null) {
			document.querySelector('.popup_rgba').style.display = "block"
			document.querySelectorAll('.popup_rgba img').forEach((el) => {
				if (el.getAttribute('src') == null && el.getAttribute('data-src') != null) {
					el.setAttribute('src', el.getAttribute('data-src'))
				}
			})
			document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
			document.querySelector(".popup_main.pu_liter").style.display = "block"
			document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
				el.style.display = "none"
			})
			document.querySelector(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']").style.display = "block"
			/* [data-section='1'] */

			document.querySelector("body").classList.add("overflow")
			document.querySelector(".popup_main.pu_liter .pu_tm i").innerHTML = liter
			let sdachca
			paths.forEach(path => {
				if (path.liter == liter) {
					sdachca = path.sdacha
				}
			})
			document.querySelector(".popup_main.pu_liter .renting_date").innerHTML = sdachca
			let sections = parseInt(document.querySelectorAll(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']")[document.querySelectorAll(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']").length - 1].getAttribute('data-section'))
			let i = 0
			document.querySelectorAll('.pu_entrance span').forEach((el) => {
				if (i < sections) {
					el.style.display = "block"
				} else {
					el.style.display = "none"
				}
				if (i == 0) el.classList.add('act')
				else el.classList.remove('act')
				i++
			})
		}
	}

	const caseLiter = (liter) => {
		switch (liter) {
			case "milenium":
				return "МИЛЛЕНИУМ"
			case "central":
				return "ЦЕНТРАЛ ПАРК"
			case "forest":
				return "ФОРЕСТ"
		}
	}

	const literPlClick = (event) => {
		event.preventDefault()
		const liter = parseInt(event.currentTarget.getAttribute('data'))
		document.querySelector('.popup_rgba').style.display = "block"
		document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
		document.querySelector(".popup_main.pu_liter").style.display = "block"
		document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
			el.style.display = "none"
		})
		document.querySelector("body").classList.add("overflow")
		document.querySelector('.pu_liter .pu_tm span').innerText = document.querySelector('.pu_liter .pu_tm span').innerText.split('№')[0] + "№" + liter
		document.querySelectorAll('.sel_fl_el').forEach((fl) => {
			fl.classList.remove('act')
		})
		document.querySelector('.sel_fl_el.fl_7').classList.add('act')
		document.querySelectorAll('.floor_img').forEach((floor) => {
			floor.style.display = "none"
		})
		//document.querySelector('.floor_img.l' + liter + "_e7").style.display = "inline-block"

	}


	return ( <section className="plan_home">
            <div className="wmain plr">
            	<div className="tm">
                    Посмотрите планировки
                </div>
                <div className="plan_home__info">Выберите корпус и этаж, чтобы посмотреть планировки</div>
            </div>
            <div className="plan_home__content" >
            	<div className="t853__scroll-icon-wrapper" id="paths_plan" style={{mixBlendMode: "multiply"}}>
			    	</div>
            	<div className="plan_home__img"><img src="img/home_main.jpg" /></div>
            	<div className="plan_home__hover">
            		<div className="plan_home__hover_img plan_home__hover_img1">
            			<div className="plan_home__hover_info">
	            			<i>1</i>
	            			<span>ЛИТЕР</span>
	            		</div>
            			<img src="img/plan_home__1.svg" />
            		</div>
            		<div className="plan_home__hover_img plan_home__hover_img2">
            			<div className="plan_home__hover_info">
	            			<i>2</i>
	            			<span>ЛИТЕР</span>
	            		</div>
            			<img src="img/plan_home__2.svg" />
            		</div>
            		<div className="plan_home__hover_img plan_home__hover_img3">
            			<div className="plan_home__hover_info">
	            			<i>3</i>
	            			<span>ЛИТЕР</span>
	            		</div>
            			<img src="img/plan_home__3.svg" />
            		</div>
            	</div>
            </div>
        </section>
	)
}

export default Genplan