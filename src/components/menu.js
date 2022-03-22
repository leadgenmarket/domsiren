import React, { useContext, useEffect } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Menu = () => {
    const blocks = useContext(BlocksContext)

    const showPopup = (e) => {
        e.preventDefault()
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.popup_rgba').style.display = "block"
        document.querySelectorAll('.popup_main').forEach(el => {
            el.style.display = "none"
        });
        console.log(e.currentTarget.getAttribute('data'))
        document.querySelector('.' + e.currentTarget.getAttribute('data')).style.display = "block"
    }

    const handleScroll = (event) => {
        if (window.scrollY < 50) {
            document.querySelector('body').classList.remove('scroll_act')
        } else {
            document.querySelector('body').classList.add('scroll_act')
        }
    }

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


            }, 1200)

        } else {
            window.scrollTo({
                top: document.querySelector("." + popup).offsetTop,
                behavior: "smooth"
            })
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

    }, [])

    return (
        <section className="hl_top plr">
            <div className="wmain">
                <div className="hl_top__l">
                    <div className="logo">дом<br />на сиреневой</div>
                    <div className="btn_nav_mobile">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="hl_nav">
                    <a href="#">Ипотека</a>
                    <a href="#">Планировки и цены</a>
                    <a href="#">Инфраструктура</a>
                    <a href="#">Контакты</a>
                </div>
                <a className="hl_phone" href="tel:84959880202"><img src="img/hl_phone_ico.png" />8 495 988 02 02</a>
            </div>
        </section>
    )
}