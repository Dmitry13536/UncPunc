import { motion } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import { Link, useNavigate } from "react-router-dom"
import { useMonster } from "../../../../context/MonsterContext"

var GameMenu = () => {

    var nav = useNavigate()
    const {maxLevel, changeLevel} = useMonster()

    return (
        <>
            <h1 className={sass.Title} > Меню </h1>
            <motion.button className={sass.Btn} onClick={() => nav('/clicker/updates')}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} 
            >
                Улучшения
            </motion.button>

            <Link to={'/menu'} className={sass.Link} > Назад </Link>
        </>
    )
}

export default GameMenu
