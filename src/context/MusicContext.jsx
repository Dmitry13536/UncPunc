import { createContext, useContext, useEffect, useRef, useState } from "react";
import MusicToggler from "../components/Outlet/MusicToggler";
import music1 from '../AUDIO/menuMusic1.mp3'
import music2 from '../AUDIO/menuMusic2.mp3'

const MusicContext = createContext();

export const MusicProvider = ({children}) => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);

    var [ musicCurr, setMusicCurr ] = useState(music1)

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

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.src === musicCurr
            if (isPlaying) audioRef.current.play()
        }
    }, [musicCurr])

    var musicChange = () => {
        setMusicCurr(prev => {
            var curr = music1
            switch (prev) {
                case music1:
                    curr = music2
                    break
                case music2:
                    curr = music1
                    break
                default:
                    curr = music1
                    break
            }
            return curr
        })
        setIsPlaying(true)
    }

    useEffect(()=> {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);
    

    return <MusicContext.Provider value={{ musicChange, musicCurr, isPlaying, volume, setVolume, togglePlay, playMusic}}>
        {children}
        <audio src={musicCurr} ref={audioRef} loop />
        <MusicToggler />
    </MusicContext.Provider>
}

export const useMusic = () =>  useContext(MusicContext);
