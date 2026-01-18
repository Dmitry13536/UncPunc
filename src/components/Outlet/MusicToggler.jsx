import { motion as m } from "motion/react";
import sass from '../../sass/MusicToggler.module.scss'
import on from '../../IMG/MusicOn.png';
import off from '../../IMG/MusicOff.png'
import { useMusic } from "../../context/MusicContext";

function MusicToggler() {

    const {isPlaying, togglePlay} = useMusic()

    return (
        <>
            {
                isPlaying ? 
                
                    <m.img 
                        className={sass.musictoggler} 
                        whileHover={{ scale: 1.3 }} 
                        whileTap={{ scale: 1.8 }} 
                        src={off} onClick={togglePlay} /> 

                    : 

                    <m.img 
                        className={sass.musictoggler} 
                        whileHover={{ scale: 1.3 }} 
                        whileTap={{ scale: 1.8 }} src={on} 
                        onClick={togglePlay} /> 
            }
        </>
     );
}

export default MusicToggler;