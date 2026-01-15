import { Outlet } from "react-router-dom"
import sass from '../../../sass/Clicker.module.scss'
import { motion } from "motion/react"

var Clicker = () => {

    return (
        <div id={sass.Clicker} >

            <div className={sass.ClickerArea} >
                ClickerArea
            </div>

            <motion.div className={sass.Menu} 
               initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }} 
            >
                <Outlet />
            </motion.div>

        </div>
    )
}

export default Clicker
