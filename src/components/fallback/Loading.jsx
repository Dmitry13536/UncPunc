import { Link } from "react-router-dom"
import Mammott from '../../IMG/Monsters/Mammott.png'
import { motion } from "motion/react"

var Loading = () => {

    var bg = localStorage.getItem('bg')

    return (
        <div className="LoadingComponent" >

            <img src={Mammott} alt='monsterMammott' style={{ position: 'absolute', top: '45%', left: '60%' }} />

            <div className={bg} >    
                <h1>Loading...</h1>
                
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} transition={{ scale: { delay: 0.1 } }}>
                    <Link to={'/menu'} > To menu </Link>
                </motion.button>
            </div>
        </div>
    )
}

export default Loading
