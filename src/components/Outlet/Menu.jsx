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
                <div className={sass.butt}>Играть</div>
                <div className={sass.butt} onClick={()=>navigate('/settings')}>Настройки</div>
                <div className={sass.butt} onClick={()=>navigate('/')}>Шабашка</div>
            </div>
        </div>
    )
}

export default Menu
