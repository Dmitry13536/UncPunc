import { createContext, useCallback, useContext, useEffect, useState } from "react";

const MonsterContext = createContext();

const GlobalList={
    1:['Mammott.json', 'Toe%20Jammer.json', 'Noggin.json', 'Potbelly.json', 'Furcorn.json', 'Oaktopus.json'],
    2:['T-rox.json', 'Entbrat.json']
}

const Monsters={
    
}

export const MonsterProvider = ({children}) => {
    const [current, setCurrent] = useState('Mammott.json');
    const [level, setLevel] = useState(200);
    const [maxLevel, setMaxLevel] = useState(level);
    const [monsterCount, setMonsterCount] = useState(0); // количество убитых монстров, чтобв перейти на некст левел(10)
    const [animation, setAnimation] = useState(false) // анимация смерти
    const [HP, setHP] = useState(10); // уменьшающееся хп 
    const [maxHp, setMaxHp] = useState(10) // статичное хп для отрисовки
    const [reward, setReward] = useState(2) //бабки с монстров

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
            console.log()
    }

    useEffect(()=>{
        if (monsterCount >= 10){
            setLevel(prev => prev + 1)
            if (maxLevel<level) setMaxLevel(level);
            setMonsterCount(0)
            } 
        },[monsterCount, level])

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
        setHP(prev=>prev-10000)
    }

    const changeLevel = (level) => {
        setLevel(level);
        setMonsterCount(0)
        nextMonster()
    }

    return <MonsterContext.Provider value={{level, maxLevel, HP, maxHp, current, animation, attackMonster, changeLevel, maxLevel}}>
        {children}
    </MonsterContext.Provider>
}

export const useMonster = () => useContext(MonsterContext);