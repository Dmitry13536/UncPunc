import { Outlet } from "react-router-dom"
import sass from '../../../sass/Clicker.module.scss'
import { motion } from "motion/react"
import ClickerArea from "./ClickerArea"

var Clicker = () => {

    return (
        <div id={sass.Clicker} >

            <ClickerArea />

            <motion.div className={sass.Menu} 
               initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }} 
            >
                <Outlet />
            </motion.div>

        </div>
    )
}

export default Clicker
