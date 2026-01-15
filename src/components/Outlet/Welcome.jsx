import { motion } from "motion/react"
import sass from '../../sass/Welcome.module.scss'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {useMusic} from '../../MusicContext';

var Welcome = () => {

    const {playMusic} = useMusic()

    useEffect(()=>{
        const firstInteraction =()=> {
        playMusic();
        window.removeEventListener('click', firstInteraction);}
        window.addEventListener('click', firstInteraction);
        return ()=>{
            window.removeEventListener('click', firstInteraction)
        }
    },[])

    var nav = useNavigate()

    var play = () => {
        nav('/menu')
    }

    return (
        <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} 
            onClick={play} initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} className={sass.WelcomeBtn}
        >
            К игре
        </motion.button>
    )
}

export default Welcome
