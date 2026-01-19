import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useUpgrades } from "./UpgradeContext";
import MonstersObj from '../Monsters.json';

const MonsterContext = createContext();

const Monsters = MonstersObj.Monsters; 

export const MonsterProvider = ({children}) => {

    const [current, setCurrent] = useState(1);
    const [level, setLevel] = useState(200);
    const [maxLevel, setMaxLevel] = useState(level);
    const [monsterCount, setMonsterCount] = useState(0);
    const [animation, setAnimation] = useState(false) // анимация смерти
    const [HP, setHP] = useState(10); // уменьшающееся хп 
    const [maxHp, setMaxHp] = useState(10) // статичное хп для отрисовки
    const [reward, setReward] = useState(2) //бабки с монстров

    const {damage, setMoney} = useUpgrades()

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
            if (maxLevel<level) setMaxLevel(level);
            setMonsterCount(0)
            } 
        },[monsterCount, level])

    const monsterDefeat = useCallback(() => {
        return HP <= 0;
    }, [HP])

     const nextMonster = useCallback((currentLevel, monsterCount) => {
        let selectedId = null ;
        let count = 0;
        if(monsterCount >= 8 ){
            for (const m of Monsters){
            if (currentLevel >= m.minLevel && currentLevel <= m.maxLevel && m.CanBeBoss && !m.CanBeCreep){
                count++;
                if(Math.random() < 1 / count) selectedId = m.id
            }
        }
            selectedId = selectedId || Monsters[0].id 
        }else{
            for (const m of Monsters){
            if (currentLevel >= m.minLevel && currentLevel <= m.maxLevel && m.CanBeCreep){
                count++;
                if(Math.random() < 1 / count) selectedId = m.id
            }
        }
        selectedId = selectedId || Monsters[0].id 
        }
        setCurrent(selectedId)
        setMonsterCount(prev=>prev+1)
        MonsterBalance()
    })

    useEffect(()=>{
        let animTimeout;
        if (HP <= 0){
            setAnimation(true);
            animTimeout = setTimeout(()=>{
                setAnimation(false);
                setMoney(prev=>prev+reward)
                nextMonster(level, monsterCount);
            }, 1000)}
        return () => {
      if (animTimeout) { 
        clearTimeout(animTimeout);
      }}
    }, [HP, nextMonster])

    const attackMonster = () => { 
        if (HP == 0) return null
        setHP(prev=>prev-damage)
    }

    const changeLevel = (level) => {
        setLevel(level);
        setMonsterCount(0)
    }

    useEffect(()=>{
        nextMonster(level, monsterCount)
    }, [level])

    const getMonsterById = () => {
        return Monsters.find(m => m.id === current)
    }

    return <MonsterContext.Provider value={{level, maxLevel, HP, maxHp, current, animation, attackMonster, changeLevel, getMonsterById, maxLevel}}>
        {children}
    </MonsterContext.Provider>
}

export const useMonster = () => useContext(MonsterContext);
