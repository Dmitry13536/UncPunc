import { Outlet } from "react-router-dom"
import sass from '../sass/Root.module.scss'
import { bgAtom } from "../atoms/bgAtom"
import { useAtomValue } from "jotai"
import { motion } from "motion/react"

var Root = () => {

    var bg = useAtomValue(bgAtom)

    return (
        <div id={sass.Root} className={sass[bg]}>
            <Outlet />
        </div>
    )
}

export default Root
