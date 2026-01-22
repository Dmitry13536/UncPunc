import { img } from 'motion/react-client';
import { useMonster } from '../../../../context/MonsterContext';
import { useUpgrades } from '../../../../context/UpgradeContext';
import sass from '../../../../sass/Clicker.module.scss'


function Upgrades() {

    const {upgrades, nextLevelUpgrade, money, formatNumber} = useUpgrades()
    const {maxLevel} = useMonster()

    return ( 
        <div className={sass.upgradelist}>
        {upgrades.map(upgrade => 
            upgrade.levelForUnlock > maxLevel ? 
            (<p>Откроется после {upgrade.levelForUnlock} уровня</p>) 
            :
            (<div className={sass.upgrade}>
                <p>{upgrade.title}</p>
                <p>{upgrade.level} уровень</p>
                <p>Урон: +{formatNumber(upgrade.damage)}</p>
                <p>Цена: {formatNumber(upgrade.cost)}</p>
                <button disabled={money<=upgrade.cost} onClick={()=>nextLevelUpgrade(upgrade.id)}>Улучшить</button>
            </div>)
        )}
        </div>
     );
}

export default Upgrades;