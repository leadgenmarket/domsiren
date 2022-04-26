import React, { Suspense, useEffect, useState, useContext } from "react"
import { BlocksContext } from "../context/blocksContext"
import { Popups } from "./popups";
import { Menu } from './menu';
import { Header } from './header';




export const Loader = () => {
    const Presentation = React.lazy(() => import("./presentation"))
    const Infra = React.lazy(() => import("./infra"))
    const Comfort = React.lazy(() => import("./comfort"))
    const Transport = React.lazy(() => import("./transport"))
    const Plan_price = React.lazy(() => import("./plan_price"))
    const Podbor = React.lazy(() => import("./podbor"))
    const Ipoteka = React.lazy(() => import("./ipoteka"))
    const Galery = React.lazy(() => import("./galery"))
    const Hod_str = React.lazy(() => import("./hod_str"))
    const Contacts = React.lazy(() => import("./contacts"))
    const Footer = React.lazy(() => import("./footer"))

    const blocksImports = [
        <Menu />,
        <Header />,
        <Infra />,
        <Presentation />,
        <Comfort />,
        /*<Genplan />,*/
        < Transport />,
        <Plan_price />,
        <Podbor />,
        <Ipoteka />,
        <Galery />,
        <Hod_str />,
        <Contacts />,
        <Footer />
    ]

    const loaded = useContext(BlocksContext)

    const LoadBlock = (block) => {
        return <Suspense fallback={<div>Загрузка...</div>}>{block}</Suspense>
    }

    const generateHtml = () => {
        let toDraw = []
        for (let i = 0; i < loaded.blocks; i++) {
            toDraw.push(LoadBlock(blocksImports[i]))
        }
        return (
            <div className="blocks" data={loaded.menuClick ? "true" : ""}>
                {loaded.popup?<Popups />:<div></div>}
                {toDraw.map((block) =>
                    block
                )}
            </div>

        )
    }
    const handleScroll = (event) => {
        if (loaded.blocks < blocksImports.length) {
            loaded.setBlocks(blocksImports.length) //fix later
            loaded.setPopup(true)
        } else {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }
    useEffect(() => {
        if (loaded.blocks < blocksImports.length) {
            window.addEventListener('scroll', handleScroll, true);
        }
    })
    return generateHtml()

}