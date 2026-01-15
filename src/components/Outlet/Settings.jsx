import { useState } from 'react';
import sass from '../../sass/Settings.module.scss'
import { useMusic } from '../../MusicContext';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const {volume, setVolume} = useMusic()
    const handleVolumeChange = (event) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
    };

    const navigate = useNavigate()
    

    return ( 
        <div className={sass.settings}>
            
            <input type="range" min='0' max='1' step='0.05' value={volume} onChange={handleVolumeChange} />
            <div className={sass.butt} onClick={()=>navigate('/menu')}>Шабашка</div>
        </div>
     );
}

export default Settings;