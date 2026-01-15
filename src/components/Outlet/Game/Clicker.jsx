import { motion } from "motion/react"
import sass from '../../../sass/Clicker.module.scss'
import { useNavigate } from "react-router-dom"

var Clicker = () => {

    var nav = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id={sass.Clicker} >
            <div className={sass.ClickerArea} >
                Clicker
            </div>
            
            <div className={sass.Menu}>
                <motion.button className={sass.Btn} onClick={() => nav('/menu')} 
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
                >
                    Меню
                </motion.button>

                <motion.button className={sass.Btn}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
                >
                    Улучшения
                </motion.button>

                <motion.button className={sass.Btn} 
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
                >
                    Предыдущие уровни

                </motion.button>
                
                <motion.button className={sass.Btn} 
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
                >
                    Следующий уровень
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Clicker
