import sass from '../../../sass/ClickerArea.module.scss'
import monster from '../../../IMG/testmonster.png'
import island from '../../../IMG/PlantIsland.png'
import { motion, scale } from 'motion/react';
import MonsterRender from './MonsterRender';
import { useState } from 'react';
import { useMonster } from '../../../context/MonsterContext';


function ClickerArea() {

    const {level} = useMonster()

    return ( 
        <div className={sass.clickerarea}>
            <p>Level {level}</p>
            <MonsterRender />
            <img className={sass.island} src={island} draggable={false} />
        </div>
     );
}

export default ClickerArea;