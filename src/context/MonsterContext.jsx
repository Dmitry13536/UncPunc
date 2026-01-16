import { createContext, useContext, useEffect, useState } from "react";

const MonsterContext = createContext();

const GlobalList={
    1:['Mammott.json', 'Toe%20Jammer.json', 'Noggin.json', 'Potbelly.json', 'Furcorn.json', 'Oaktopus.json']
}

export const MonsterProvider = ({children}) => {
    const [current, setCurrent] = useState('Mammott.json');
    const [level, setLevel] = useState(1);
    const [monsterCount, setMonsterCount] = useState(0);
    const [HP, setHP] = useState(10);
    const [maxHp, setMaxHp] = useState(10)

    useEffect(()=>{
        if (monsterCount >= 10){
            setLevel(prev=>prev+=1)
            setMonsterCount(0)
        }
    },[monsterCount])

    const nextMonster = () => {
        const randNum = Math.floor(Math.random() * GlobalList[1].length)
        setCurrent(GlobalList[1][randNum])
    }

    const attackMonster = () => {
        if (HP <= 0){
            setMonsterCount(prev=>prev+1)
            nextMonster()
            setHP(10)
            setMaxHp(10)
        }
        setHP(prev=>prev-1)
    }

    return <MonsterContext.Provider value={{level, HP, maxHp, current, attackMonster}}>
        {children}
    </MonsterContext.Provider>
}

export const useMonster = () => useContext(MonsterContext);