import { createContext, useContext, useState } from "react"

    var UpgradesContext = createContext()

    export var UpgradesProvider = ({ children }) => {
        var [ attackLvl, setAttackLvl ] = useState(1)
        var [ autoClickLvl, setAutoClickLvl ] = useState(0)
        const [money, setMoney] = useState(0);
        const [damage, setDamage] = useState(10000000000);
        // var { attackLvl, autoClickLvl } = useState(UpgradesContext)

        var upgradeAttack = () => {
            setAttackLvl(prev => prev + 1)
        }

        var upgradeAutoClick = () => {
            setAutoClickLvl(prev => prev + 1)
        }

        return (
            <UpgradesContext.Provider value={{ money, damage, attackLvl, autoClickLvl, setMoney, upgradeAttack, upgradeAutoClick }}>
                {children}
            </UpgradesContext.Provider>
        )
    }

    export var useUpgrades = () => useContext(UpgradesContext)