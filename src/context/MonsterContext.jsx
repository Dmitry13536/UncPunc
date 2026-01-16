import { createContext, useCallback, useContext, useEffect, useState } from "react";

const MonsterContext = createContext();

const GlobalList={
    1:['Mammott.json', 'Toe%20Jammer.json', 'Noggin.json', 'Potbelly.json', 'Furcorn.json', 'Oaktopus.json']
}

export const MonsterProvider = ({children}) => {
    const [current, setCurrent] = useState('Mammott.json');
    const [level, setLevel] = useState(1);
    const [monsterCount, setMonsterCount] = useState(0);
    const [animation, setAnimation] = useState(false)
    const [HP, setHP] = useState(10);
    const [maxHp, setMaxHp] = useState(10)

    useEffect(()=>{
        if (monsterCount >= 10){
            setLevel(prev=>prev+=1)
            setMonsterCount(0)
        }
    },[monsterCount])

    const monsterDefeat = useCallback(() => {
        return HP <= 0
    }, [HP])

     const nextMonster = useCallback(() => {
        const randNum = Math.floor(Math.random() * GlobalList[1].length)
        setCurrent(GlobalList[1][randNum])
        setMonsterCount(prev=>prev+1)
        setHP(10)
        setMaxHp(10)
    },[])

    useEffect(()=>{
        let animTimeout;
        if (HP <= 0){
            setAnimation(true);
            animTimeout = setTimeout(()=>{
                setAnimation(false)
                nextMonster();
            }, 1000)}
        return () => {
      if (animTimeout) { 
        clearTimeout(animTimeout);
      }}
    }, [HP, nextMonster])

    const attackMonster = () => { 
        if (HP == 0) return null       
        setHP(prev=>prev-1)
    }

    return <MonsterContext.Provider value={{level, HP, maxHp, current, animation, attackMonster}}>
        {children}
    </MonsterContext.Provider>
}

export const useMonster = () => useContext(MonsterContext);