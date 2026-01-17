import { motion } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import { Link } from "react-router-dom"

var LevelsList = () => {

    var levelsFinished = localStorage.getItem('levelsFinished')

    var levels = () => {
        var elements = []
        for (let numLevel = 1; numLevel <= levelsFinished; numLevel++ ) {
            elements.push(<motion.div className={sass.LevelSquad}  onClick={
                () => localStorage.setItem('levelNow', numLevel)
            } whileHover={{ scale: 1.5 }} whileTap={{ scaleX: 1.4, scale: 0.9 }} key={numLevel}> {numLevel} </motion.div>)
        }
        return elements
    }

    var LevelSquads = () => {
        return (
            <div className={sass.LevelsBox} >
                {levels()}
            </div>
        )
    }

    return (
        <div className={sass.LevelsList}>
            <h1 className={sass.Title} >Пройденные уровни</h1>
            <LevelSquads />
            <Link to={'/clicker/menu'} className={sass.Link} > Назад </Link>
        </div>
    )
}

export default LevelsList
