import { motion } from "motion/react";
import sass from '../../sass/MusicToggler.module.scss'
import on from '../../IMG/MusicOn.png';
import off from '../../IMG/MusicOff.png'
import { useMusic } from "../../MusicContext";

function MusicToggler() {

    const {isPlaying, togglePlay} = useMusic()

    return (
        <>
        {isPlaying ? <motion.img className={sass.musictoggler} whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.8 }} src={off} onClick={togglePlay} /> : <motion.img className={sass.musictoggler} whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.8 }} src={on} onClick={togglePlay} /> }
        </>
     );
}

export default MusicToggler;