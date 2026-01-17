import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { bgAtom } from '../atoms/bgAtom'
import { useSetAtom } from "jotai";

const MonsterContext = createContext();

const GlobalList={
    1:['Mammott.json', 'Toe%20Jammer.json', 'Noggin.json', 'Potbelly.json', 'Furcorn.json', 'Oaktopus.json'],
    2:['T-rox.json', 'Entbrat.json']
}

const Monsters={
    
}

export const MonsterProvider = ({children}) => {
    const [current, setCurrent] = useState('Mammott.json');
    const [level, setLevel] = useState(1);
    const [monsterCount, setMonsterCount] = useState(0);
    const [animation, setAnimation] = useState(false)
    const [HP, setHP] = useState(10);
    const [maxHp, setMaxHp] = useState(10)
    const [reward, setReward] = useState(2)

    var bgSet = useSetAtom(bgAtom)

    const MonsterBalance = () => {
            const levelFactor = Math.pow(1.08, level-1);
            const killfactor = 1+(monsterCount*0.05)
            const diffkoef = (levelFactor*killfactor).toFixed(2)

            if(monsterCount == 9){
                setHP(Math.floor(10 * diffkoef * 1.2*9))
                setMaxHp(Math.floor(10 * diffkoef * 1.2*9))
                setReward(Math.floor(2 * diffkoef * 0.8*5))       
            }else{
                setHP(Math.floor(10 * diffkoef * 1.2))
                setMaxHp(Math.floor(10 * diffkoef * 1.2))
                setReward(Math.floor(2 * diffkoef * 0.8))       
            }
    }

    useEffect(()=>{
        if (monsterCount >= 10){
            setLevel(prev => prev + 1)
            setMonsterCount(0)
            } 
        },[monsterCount])

    const monsterDefeat = useCallback(() => {
        return HP <= 0
    }, [HP])

     const nextMonster = useCallback(() => {
        let randNum;
        if(monsterCount == 9){
            randNum = Math.floor(Math.random() * GlobalList[2].length)
            setCurrent(GlobalList[2][randNum])
        }else{
            randNum = Math.floor(Math.random() * GlobalList[1].length)
            setCurrent(GlobalList[1][randNum])
        }
        setMonsterCount(prev=>prev+1)
        MonsterBalance()
    },[level, monsterCount])

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
        setHP(prev=>prev-100)
    }

    return <MonsterContext.Provider value={{level, HP, maxHp, current, animation, attackMonster}}>
        {children}
    </MonsterContext.Provider>
}

export const useMonster = () => useContext(MonsterContext);
