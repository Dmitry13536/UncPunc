import { Outlet } from "react-router-dom"
import sass from '../sass/Root.module.scss'
import { useEffect, useState } from "react"
import { useMonster } from "../context/MonsterContext"

var Root = () => {

    const [bg, setBg] = useState('RootDefaultBg');
    const {level} = useMonster();

    const bgArray = ['RootDefaultBg', 'RootWinterBg', 'RootMontainBg', 'RootWaterBg', 'RootVolcanoBg'] 

    useEffect(()=>{
        const bgRawIndex = Math.trunc(level/20);
        const bgIndex = Math.min(bgRawIndex, bgArray.length-1)
        setBg(bgArray[bgIndex]);
    }, [level])
                

    return (
        <div id={sass.Root} className={sass[bg]}>
            <Outlet />
        </div>
    )
}

export default Root
