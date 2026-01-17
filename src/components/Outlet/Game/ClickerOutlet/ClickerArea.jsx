import sass from '../../../../sass/ClickerArea.module.scss'
import Plant from '../../../../IMG/PlantIsland.png'
import Water from '../../../../IMG/WaterIsland.png'
import Lava from '../../../../IMG/LavaIsland.png'
import Air from '../../../../IMG/AirIsland.png'
import Cold from '../../../../IMG/ColdIsland.png'
import MonsterRender from '../MonsterRender';
import { useMonster } from '../../../../context/MonsterContext';
import { useEffect, useState } from 'react'

function ClickerArea() {

    const {level} = useMonster()
    const [island, setIsland] = useState()

    const bgArray = [Plant, Cold, Air, Water, Lava] 
    
        useEffect(()=>{
            const bgRawIndex = Math.trunc(level/20);
            const bgIndex = Math.min(bgRawIndex, bgArray.length-1)
            setIsland(bgArray[bgIndex]);
        }, [level])

    return ( 
        <div className={sass.clickerarea}>
            <p style={{ paddingLeft: '506px', width: '100%' }} >Level {level}</p>
            <MonsterRender />
            <img className={sass.island} src={island} draggable={false} />
        </div>
     );
}

export default ClickerArea;
