import sass from '../../../sass/ClickerArea.module.scss'
import monster from '../../../IMG/testmonster.png'
import island from '../../../IMG/PlantIsland.png'
import { motion, scale } from 'motion/react';
import MonsterRender from './MonsterRender';
import { useState } from 'react';


function ClickerArea() {

    // const list = ['Entbrat.json', 'Noggin.json', 'Mammott.json']
    // const [monster, setMonster] = useState('Mammott.json');
    // const NextMonster = () => {
    //     setMonster(list[0])
    // }

    return ( 
        <div className={sass.clickerarea}>
            <MonsterRender monster='Toe%20Jammer.json'/>
            <img className={sass.island} src={island} draggable={false} />
        </div>
     );
}

export default ClickerArea;