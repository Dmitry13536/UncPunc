import sass from '../../sass/Settings.module.scss'
import { useMusic } from '../../context/MusicContext';
import { useNavigate } from 'react-router-dom';
import { motion as m } from 'motion/react';

function Settings() {
    const {volume, setVolume, musicChange} = useMusic()
    const handleVolumeChange = (event) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
    };

    const navigate = useNavigate()

    return ( 
        <div className={sass.settings}>

            <input 
              type="range" 
              min='0' 
              max='1' 
              step='0.05' 
              value={volume} 
              onChange={handleVolumeChange}
              className={sass.input} />

            <m.button 
              className={sass.ChangeMusicBtn} 
              onClick={() => musicChange()} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Сменить трек
            </m.button>

            <m.div 
              whileHover={{ scale: 1.2 }} 
              whileTap={{ scale: 0.9 }} 
              className={sass.butt} 
              onClick={()=>navigate('/menu')}
            >
              Шабашка
            </m.div>
            
        </div>
     );
}

export default Settings;
