import sass from '../../sass/Menu.module.scss'
import logo from '../../IMG/Logo.png'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

var Menu = () => {

    const navigate = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sass.Menu}>
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
                    onClick={() => {
                        navigate('/clicker', { replace: true })
                        play()
                    }} className={sass.butt}
                >
                    Играть
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    onClick={() => {
                        navigate('/settings')    
                        play()
                    }} className={sass.butt} 
                >
                    Настройки
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} 
                    onClick={()=>{
                        navigate('/')
                        play()
                    }} className={sass.butt}
                >
                    Шабашка
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Menu
