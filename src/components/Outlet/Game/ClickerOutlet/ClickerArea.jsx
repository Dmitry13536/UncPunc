import sass from '../../../../sass/ClickerArea.module.scss'
import island from '../../../../IMG/PlantIsland.png'
import MonsterRender from '../MonsterRender';
import { useMonster } from '../../../../context/MonsterContext';


function ClickerArea() {

    const {level} = useMonster()

    return ( 
        <div className={sass.clickerarea}>
            <p style={{ paddingLeft: '506px', width: '100%' }} >Level {level}</p>
            <MonsterRender />
            <img className={sass.island} src={island} draggable={false} />
        </div>
     );
}

export default ClickerArea;
