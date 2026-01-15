import sass from '../../sass/Menu.module.scss'
import logo from '../../IMG/Logo.png'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

var Menu = () => {

    const navigate = useNavigate()

    return (
        <div className={sass.Menu}>
            <motion.img animate={{
                scale: [1.0, 0.85, 0.9, 1.0],
                // rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
                duration: 5,
                ease: 'linear',
                repeat: Infinity, 
                repeatType: 'loop',
            }}
            src={logo} className={sass.logo} />
            <div className={sass.buttons}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    onClick={() => {
                        navigate('/clicker/menu', { replace: true })
                    }} className={sass.butt}
                >
                    Играть
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ x: -240, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    onClick={() => {
                        navigate('/settings')    
                    }} className={sass.butt} 
                >
                    Настройки
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    initial={{ x: 240, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    onClick={()=>{
                        navigate('/')
                    }} className={sass.butt}
                >
                    Шабашка
                </motion.div>
            </div>
        </div>
    )
}

export default Menu
