const Podbor = () => {
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
	        				<div>все</div>
	        				<div class="act">студии</div>
	        				<div>1 - ком</div>
	        				<div>2 - ком</div>
	        				<div>3 - ком</div>
	        			</div>
	        			<div class="flat__nav_etaj">
	        				<div class="flat__nav_name">Выберите этаж</div>
	        				<div id="slid__etaj2" class="slid"></div>
	        			</div>
	        		</div>
                    <div class="in_3">
                        <div class="in_item">
                            <label class="in_style">
                                <i><img src="img/in_name.png" /></i>
                                <input type="text" value="Алексей" data="Алексей" />
                            </label>
                        </div>
                        <div class="in_item">
                            <label class="in_style">
                                <i><img src="img/in_mail.png" /></i>
                                <input type="text" value="Ваш e-mail" data="Ваш e-mail" />
                            </label>
                        </div>
                        <div class="in_item">
                            <label class="in_style">
                                <i><img src="img/in_phone.png" /></i>
                                <input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" />
                            </label>
                        </div>
                    </div>
                    <div class="alicen_center">
                        <button class="btn_form">
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