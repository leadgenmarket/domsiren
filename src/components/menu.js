import React, { useContext, useEffect, useState } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Menu = () => {
    const blocks = useContext(BlocksContext)
    const [opened, setOpened] = useState(false)

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
        if (blocks.blocks < 13) {
            blocks.setMenuClick(true)
            blocks.setBlocks(13)
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
        setOpened(false)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

    }, [])

    const mobileMenuClick = (e) => {
        e.preventDefault()
        setOpened(!opened)
    }

    return (
        <section className="hl_top plr">
            <div className="wmain">
                <div className="hl_top__l">
                    <div className="logo">дом<br />на сиреневой</div>
                    <div className="btn_nav_mobile" onClick={mobileMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={!opened ? "hl_nav" : "hl_nav hl_nav_opened"}>
                    <a href="infra" onClick={clickMenu}>Инфраструктура</a>
                    <a href="flat" onClick={clickMenu}>Планировки и цены</a>
                    <a href="ipoteka" onClick={clickMenu}>Ипотека</a>
                    <a href="contact" onClick={clickMenu}>Контакты</a>
                </div>
                <a className="hl_phone roistat-phone" href="tel:84959880202"><img src="img/hl_phone_ico.png" />8 495 988 02 02</a>
            </div>
        </section>
    )
}