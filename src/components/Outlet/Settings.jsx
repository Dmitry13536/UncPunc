import { useState } from 'react';
import sass from '../../sass/Settings.module.scss'
import { useMusic } from '../../MusicContext';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { bgAtom } from '../../atoms/bgAtom';

function Settings() {
    const {volume, setVolume} = useMusic()
    const handleVolumeChange = (event) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
    };

    const navigate = useNavigate()
    
    var [ bg, setBg ] = useAtom(bgAtom)

    var changeBg = () => {
      switch (bg) {
        case 'RootDefaultBg': 
          setBg('RootMontainBg')
          break
        case 'RootMontainBg': 
          setBg('RootVolcanoBg')
          break
        case 'RootVolcanoBg': 
          setBg('RootWaterBg')
          break
        case 'RootWaterBg': 
          setBg('RootWinterBg')
          break
        case 'RootWinterBg': 
          setBg('RootDefaultBg')
          break
      }
    }

    return ( 
        <div className={sass.settings}>
            <input type="range" min='0' max='1' step='0.05' value={volume} onChange={handleVolumeChange} />
            <button className={sass.bgSetter} onClick={changeBg} > Фон </button>
            <div className={sass.butt} onClick={()=>navigate('/menu')}>Шабашка</div>
        </div>
     );
}

export default Settings;
