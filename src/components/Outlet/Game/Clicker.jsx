import { Navigate, Outlet } from "react-router-dom"
import sass from '../../../sass/Clicker.module.scss'
import { motion, AnimatePresence, useAnimate } from "motion/react"
import ClickerArea from "./ClickerOutlet/ClickerArea"
import * as Menu from '@radix-ui/react-dropdown-menu'
import { useNavigate } from "react-router-dom"
import { Activity, useState } from "react"

var Clicker = () => {

    var [ coords, animate ] = useAnimate()

    var [ visible, setVisible ] = useState(false)

    var nav = useNavigate()

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

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '30%' }} >
                <ClickerArea />

                <div style={{ display: 'flex', flexDirection: 'row', zIndex: '1000', position: 'relative', 
                        paddingTop: '200px', paddingLeft: '100px', width: '100%', gap: '12px' }} 
                >
                    <motion.button onClick={() => nav('/clicker/levels', { replace: true })} 
                        className={sass.BtnLevel} style={{ width: '200px' }}
                    >
                        Пройденные уровни
                    </motion.button>

                    <motion.button className={sass.BtnLevel} style={{ width: '200px' }} > 
                        Вернутся на последний уровень
                    </motion.button>
                </div>
            </div>

            <motion.div
                className={sass.Menu} 
                initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }} 
                ref={coords}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
                style={{ transformStyle: 'preserve-3d' }}  
            >
                <Outlet />
            </motion.div>

            <Navigate to={'/clicker/menu'} />

        </div>
    )
}

export default Clicker
