import { React, useEffect, useState } from "react"

const Genplan = () => {
	const [hovered, setHovered] = useState(false)

	const literClick = (e) => {
		const liter = e.currentTarget.getAttribute("data")
		document.querySelector('.pu_rgba').style.display = "block"
		document.querySelectorAll('.pu_inner').forEach(el => {
			el.style.display = "none"
		});
		document.querySelector('.pu_plan_main').style.display = "block"
		document.querySelector('.pu_plan_main .pu_title k').innerHTML = liter
	}


	return (<section className="plan_home">
		<div className="wmain plr">
			<div className="tm">
				Посмотрите планировки
			</div>
			<div className="plan_home__info">Выберите корпус и этаж, чтобы посмотреть планировки</div>
		</div>
		<div className="plan_home__content" >
			<div className="t853__scroll-icon-wrapper" id="paths_plan" style={{ mixBlendMode: "multiply" }}>
			</div>
			<div className="plan_home__img"><img src="img/home_main.jpg" /></div>
			<div className="plan_home__hover">
				<div className="plan_home__hover_img plan_home__hover_img1" data={1} onClick={literClick}>
					<div className="plan_home__hover_info">
						<i>1</i>
						<span>ЛИТЕР</span>
					</div>
					<img src="img/plan_home__1.svg" />
				</div>
				<div className="plan_home__hover_img plan_home__hover_img2" data={2} onClick={literClick}>
					<div className="plan_home__hover_info">
						<i>2</i>
						<span>ЛИТЕР</span>
					</div>
					<img src="img/plan_home__2.svg" />
				</div>
				<div className="plan_home__hover_img plan_home__hover_img3" data={3} onClick={literClick}>
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