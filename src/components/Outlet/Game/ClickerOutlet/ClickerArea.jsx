import sass from '../../../../sass/Clicker.module.scss'
import Plant from '../../../../IMG/PlantIsland.png'
import Water from '../../../../IMG/WaterIsland.png'
import Lava from '../../../../IMG/LavaIsland.png'
import Air from '../../../../IMG/AirIsland.png'
import Cold from '../../../../IMG/ColdIsland.png'
import MonsterRender from '../MonsterRender';
import { useMonster } from '../../../../context/MonsterContext';
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

function ClickerArea() {

    const {level, maxLevel, changeLevel} = useMonster()
    const [island, setIsland] = useState()
    const nav = useNavigate()

    const bgArray = [Plant, Cold, Air, Water, Lava] 
    
        useEffect(()=>{
            const bgRawIndex = Math.trunc(level/20);
            const bgIndex = Math.min(bgRawIndex, bgArray.length-1)
            setIsland(bgArray[bgIndex]);
        }, [level])

    return ( 
        <div className={sass.clickerarea}>
            <p>Level {level}</p>
            <MonsterRender />
            <img className={sass.island} src={island} draggable={false} />
            <div className={sass.BtnsLevel}>
                    <motion.button onClick={() => nav('/clicker/levels', { replace: true })} 
                        className={sass.BtnLevel}>
                        Пройденные уровни
                    </motion.button>

                    <motion.button className={sass.BtnLevel} onClick={() => changeLevel(maxLevel)}> 
                        Вернутся на последний уровень
                    </motion.button>
                </div>
        </div>

     );
}

export default ClickerArea;
