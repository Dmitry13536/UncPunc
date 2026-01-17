import sass from '../../../../sass/ClickerArea.module.scss'
import island from '../../../../IMG/PlantIsland.png'
import MonsterRender from '../MonsterRender';
import { useMonster } from '../../../../context/MonsterContext';


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
