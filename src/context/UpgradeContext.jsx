import { createContext, useContext, useState } from "react";
import upgradesArray from '../Upgrades.json';

    var UpgradesContext = createContext()

    export var UpgradesProvider = ({ children }) => {
        var [ attackLvl, setAttackLvl ] = useState(1)
        var [ autoClickLvl, setAutoClickLvl ] = useState(0)
        const [money, setMoney] = useState(0);
        const [damage, setDamage] = useState(100000000);
        const [gunCount, setGunCount] = useState(1);//удалить везде
        const [upgrades, setUpgrades] = useState(upgradesArray.upgrades)

        
        var upgradeAttack = (id) => {
            setAttackLvl(prev => prev + 1)
        }

        const nextLevelUpgrade = (id) => {
            const upgrade = upgrades.find(up => up.id == id);
            if (money < upgrade.cost) return 0;
            setDamage(prev => prev + upgrade.damage)
            setMoney(prev => prev - upgrade.cost)
            const newLevel = upgrade.level + 1
            const newCost = upgrade.cost * Math.pow(upgrade.multiplierCost, newLevel - 1)
            const newDamage = upgrade.damage * Math.pow(upgrade.multiplierDamage, newLevel - 1)
            setUpgrades(prev=>prev.map(
                up => up.id == id ?
                { 
                ...up, 
                level: newLevel, 
                cost: newCost, 
                damage: newDamage 
              }
            : up
            ))
        }   
        const formatNumber = (num) => {
            if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
            if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
            if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
            if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
            return Math.round(num);
        };

        return (
            <UpgradesContext.Provider value={{ money, damage, attackLvl, autoClickLvl, setMoney, upgradeAttack, gunCount, setGunCount, upgrades, nextLevelUpgrade, formatNumber }}>
                {children}
            </UpgradesContext.Provider>
        )
    }

    export var useUpgrades = () => useContext(UpgradesContext)