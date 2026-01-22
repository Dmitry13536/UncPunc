import { motion as m } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import coin from '../../../../IMG/Coins.png'
import { Link, useNavigate } from "react-router-dom"
import { useMonster } from "../../../../context/MonsterContext"
import { useUpgrades } from "../../../../context/UpgradeContext"
import { Activity, useState } from "react"
import * as T from '@radix-ui/react-tooltip'
import Upgrades from "./Upgrades"

var GameMenu = () => {

    var nav = useNavigate()
    // const {maxLevel, changeLevel} = useMonster()
    const {money, formatNumber} = useUpgrades()

    var [ isOpen1, setIsOpen1 ] = useState(false)
    var [ isOpen2, setIsOpen2 ] = useState(false)

    return (
        <>
            <T.Provider>
                <h1 className={sass.Title} > Меню </h1>

                <div className={sass.UpgradesMenu} >

                    <Upgrades />

                    {/* <div className={sass.MenuPlusMinus1} >
                        <button className={sass.Button} onClick={() => setIsOpen1(prev => !prev)} >Клик</button>
                        <Activity className={sass.MenuPlusMinus} mode={ isOpen1 ? 'visible' : 'hidden' }>

                            <T.Root>
                                <T.Trigger className={sass.Button}>
                                    Улучшить
                                </T.Trigger>

                                <T.Content delayDuration={0} >
                                    Атака станет сильнее, но вы потратите очки
                                </T.Content>
                            </T.Root>

                            <T.Root>
                                <T.Trigger className={sass.Button}>
                                    Ослабить
                                </T.Trigger>

                                <T.Content delayDuration={0} >
                                    Потраченные ранее очки вернутся обратно
                                </T.Content>
                            </T.Root>
            
                        </Activity>
                    </div> */}

                    {/* <div className={sass.MenuPlusMinus2} >
                        <button className={sass.Button} onClick={() => setIsOpen2(prev => !prev)} >Авто</button>
                        <Activity mode={ isOpen2 ? 'visible' : 'hidden' }>
                            <T.Root>
                                <T.Trigger className={sass.Button}>
                                    Улучшить
                                </T.Trigger>

                                <T.Content delayDuration={0} >
                                    Атака станет сильнее, но вы потратите очки
                                </T.Content>
                            </T.Root>

                            <T.Root>
                                <T.Trigger className={sass.Button}>
                                    Ослабить
                                </T.Trigger>

                                <T.Content delayDuration={0} >
                                    Потраченные ранее очки вернутся обратно
                                </T.Content>
                            </T.Root>
                        </Activity>
                    </div> */}


                </div>
                <div className={sass.MenuDown}>
                <Link to={'/menu'} className={sass.Link} > Назад </Link>
                <p>{formatNumber(money)}<img src={coin} /></p>
                </div>
            </T.Provider>
        </>
    )
}

export default GameMenu
