import { motion as m } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import { Link } from "react-router-dom"
import { useMonster } from "../../../../context/MonsterContext"

var LevelsList = () => {


    // var levelsFinished = localStorage.getItem('levelsFinished')
    const {changeLevel, maxLevel} = useMonster()

    var levels = () => {
        var elements = []
        for (let numLevel = 1; numLevel <= maxLevel; numLevel++ ) {
            elements.push(<m.div className={sass.LevelSquad}  onClick={
                () => changeLevel(numLevel)
            } whileHover={{ scale: 1.5 }} whileTap={{ scaleX: 1.4, scale: 0.9 }} key={numLevel}
            > 
                {numLevel} 
            </m.div>)
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
