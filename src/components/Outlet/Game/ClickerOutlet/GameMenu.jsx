import { AnimatePresence, motion } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import { Link, useNavigate } from "react-router-dom"
import * as Menu from '@radix-ui/react-dropdown-menu'

var GameMenu = () => {

    var nav = useNavigate()
    var levelsFinished = localStorage.getItem('levelsFinished')

    return (
        <>
            <h1 className={sass.Title} > Меню </h1>
            <motion.button className={sass.Btn} onClick={() => nav('/clicker/updates')}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} 
            >
                Улучшения
            </motion.button>

            <Menu.Root>
                <Menu.Trigger className={sass.BtnTriggerMenu} >
                    <span className={sass.Span} style={{ width: '100%', height: '100%' }} > Уровни </span>
                </Menu.Trigger>

                <Menu.Portal>
                    <AnimatePresence>
                        <Menu.Content asChild style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px', transformOrigin: 'top' }} >
                            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>
                                <Menu.Item asChild>
                                    <motion.button onClick={() => nav('/clicker/levels', { replace: true })} className={sass.BtnLevel} >
                                        Пройденные уровни
                                    </motion.button>
                                </Menu.Item>

                                <Menu.Item onClick={() => localStorage.setItem('levelNow', levelsFinished)} asChild>
                                    <motion.button className={sass.BtnLevel} >   
                                        Последний уровень
                                    </motion.button>
                                </Menu.Item>
                            </motion.div>
                        </Menu.Content>
                    </AnimatePresence>
                </Menu.Portal>
            </Menu.Root>

            <div 
                style={{ backgroundColor: 'rgb(85, 85, 85)', height: '48px', width: '240px', display: 'flex', 
                    marginLeft: 'auto', marginRight: 'auto', borderRadius: '16px',
                    boxShadow: '2px 2px 1px 1px black'}} 
            />

            <div 
                style={{ backgroundColor: 'rgb(85, 85, 85)', height: '48px', width: '240px', display: 'flex', 
                    marginLeft: 'auto', marginRight: 'auto', borderRadius: '16px',
                    boxShadow: '2px 2px 1px 1px black'}} 
            />

            <Link to={'/menu'} className={sass.Link} > Назад </Link>
        </>
    )
}

export default GameMenu
