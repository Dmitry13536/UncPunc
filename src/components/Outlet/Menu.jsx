import sass from '../../sass/Menu.module.scss'
import logo from '../../IMG/Logo.png'
import { motion as m } from 'motion/react'
import { useNavigate } from 'react-router-dom'

var Menu = () => {

    const navigate = useNavigate()

    return (
        <div className={sass.Menu}>
            <m.img initial={{ opacity: 0 }} 
                animate={{
                    scale: [1.0, 0.85, 0.9, 1.0],
                    rotate: 720,
                    opacity: 1
                }}
                transition={{
                    scale: {
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity, 
                        repeatType: 'loop'
                    },
                    rotate: {
                        duration: 0.5
                    },
                    opacity: {
                        duration: 0.5
                    }   
                }}
                src={logo} className={sass.logo} draggable={false} />
            
            <div className={sass.buttons}>
                <m.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ y: { delay: 0.25 }, opacity: { delay: 0.25 } }} 
                    onClick={() => {
                        navigate('/clicker/menu', { replace: true })
                    }} className={sass.butt}
                >
                    Играть
                </m.div>

                <m.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    transition={{ y: { delay: 0.5 }, opacity: { delay: 0.25 } }} 
                    onClick={() => {
                        navigate('/settings')    
                    }} className={sass.butt} 
                >
                    Настройки
                </m.div>
                <m.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ y: 360, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    transition={{ y: { delay: 0.75 }, opacity: { delay: 0.25 } }} 
                    onClick={()=>{
                        navigate('/')
                    }} className={sass.butt}
                >
                    Шабашка
                </m.div>
            </div>
        </div>
    )
}

export default Menu
