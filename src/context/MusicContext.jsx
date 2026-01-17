import { createContext, useContext, useEffect, useRef, useState } from "react";
import music from '../IMG/menuMusic.mp3'
import music2 from '../IMG/menuMusic2.mp3'
import MusicToggler from "../components/Outlet/MusicToggler";

const MusicContext = createContext();

export const MusicProvider = ({children}) => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);

    const playMusic = () => {
        audioRef.current.play()
        .then(()=> setIsPlaying(true))
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else{
            audioRef.current.play()
        }
        setIsPlaying(prev=>!prev)
    }

    useEffect(()=> {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);
    

    return <MusicContext.Provider value={{isPlaying, volume, setVolume, togglePlay, playMusic}}>
        {children}
        <audio src={music2} ref={audioRef} loop />
        <MusicToggler />
    </MusicContext.Provider>
}

export const useMusic = () =>  useContext(MusicContext);