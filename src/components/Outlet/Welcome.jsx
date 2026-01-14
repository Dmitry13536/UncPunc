import { motion } from "motion/react"
import sass from '../../sass/Welcome.module.scss'
import { useNavigate } from "react-router-dom"

var Welcome = () => {

    var nav = useNavigate()

    var play = () => {
        nav('/menu')
    }

    return (
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.8 }} onClick={play} className={sass.Welcome} initial={{ opacity: 0 }} animate={{ opacity: 1 }}  >
            <h1 className={sass.Play} > {'< Play >'} </h1>
        </motion.button>
    )
}

export default Welcome
