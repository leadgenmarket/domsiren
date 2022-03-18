import React, { Suspense, useEffect, useState, useContext } from "react"
import { BlocksContext } from "../context/blocksContext"
import { Popups } from "./popups";
import { Menu } from './menu';
import { Header } from './header';
import Genplan from './genplan';
import { Infra } from "./infra";
import Presentation from "./presentation";
import Comfort from "./comfort";
import Transport from "./transport";
import Plan_price from "./plan_price";




export const Loader = () => {

    const blocksImports = [
        <Menu />,
        <Header />,
        <Infra />,
        <Presentation />,
        <Comfort />,
        <Genplan />,
        <Transport />,
        <Plan_price />
    ]

    const loaded = useContext(BlocksContext)
    loaded.setBlocks(blocksImports.length)

    const LoadBlock = (block) => {
        return <Suspense fallback={<div>Загрузка...</div>}>{blocksImports}</Suspense>
    }

    const generateHtml = () => {
        /*let toDraw = []
        for (let i = 0; i < loaded.blocks; i++) {
            toDraw.push(LoadBlock(blocksImports[i]))
        }*/
        return (

            <div className="blocks" data={loaded.menuClick ? "true" : ""}>
                <Popups />
                {blocksImports.map((block) =>
                    block
                )}
            </div>

        )
    }
    /*const handleScroll = (event) => {

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
    })*/
    return generateHtml()

}