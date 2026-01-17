import { Navigate, Outlet } from "react-router-dom"
import sass from '../../../sass/Clicker.module.scss'
import { motion, useAnimate } from "motion/react"
import ClickerArea from "./ClickerOutlet/ClickerArea"

var Clicker = () => {

    var [ coords, animate ] = useAnimate()

    var mouseMove = (e) => {
        if (!coords.current) return

        var rect = e.currentTarget.getBoundingClientRect()

        var x = e.clientX - rect.left
        var y = e.clientY - rect.top

        var valueX = ((x / rect.width) * 12 - 6)
        var valueY = -((y / rect.height) * 12 - 6)

        animate(coords.current, {
            rotateX: valueX,
            rotateY: valueY 
        }, { duration: 0.1 } )

    }

    var mouseLeave = () => {
        animate(coords.current, {
            rotateX: 0,
            rotateY: 0
        }, { duration: 0.1 })
    }

    return (
        <div id={sass.Clicker} >

            <ClickerArea />

            <motion.div
                className={sass.Menu} 
                initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }} 
                ref={coords}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
                style={{ transformStyle: 'preserve-3d', overflow: 'auto', marginRight: '12px' }}  
            >
                <Outlet />
            </motion.div>

            <Navigate to={'/clicker/menu'} />

        </div>
    )
}

export default Clicker
