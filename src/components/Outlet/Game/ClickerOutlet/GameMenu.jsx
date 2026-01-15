import { AnimatePresence, motion } from "motion/react"
import sass from '../../../../sass/Clicker.module.scss'
import { useNavigate } from "react-router-dom"
import * as Menu from '@radix-ui/react-dropdown-menu'

var GameMenu = () => {

    var nav = useNavigate()

    return (
        <>
            <motion.button className={sass.Btn} onClick={() => nav('/menu')} 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} 
            >
                Меню
            </motion.button>

            <motion.button className={sass.Btn} onClick={() => nav('/clicker/updates')}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} 
            >
                Улучшения
            </motion.button>

            <Menu.Root>
                <Menu.Trigger className={sass.Btn} >
                    <motion.span className={sass.Span} style={{ width: '100%', height: '100%' }} whileHover={{ scale: 1.3 }} > Уровни </motion.span>
                </Menu.Trigger>


                <Menu.Portal>
                    <AnimatePresence>
                        <Menu.Content asChild style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px', transformOrigin: 'top' }} >
                            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>
                                <Menu.Item asChild>
                                    <motion.button className={sass.BtnLevel} >
                                        Пройденные уровни
                                    </motion.button>
                                </Menu.Item>

                                <Menu.Item asChild>
                                    <motion.button className={sass.BtnLevel} >   
                                        Следующий уровень
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
                    boxShadow: '2px 2px 2px 2px black'}} 
            />

            <div 
                style={{ backgroundColor: 'rgb(85, 85, 85)', height: '48px', width: '240px', display: 'flex', 
                    marginLeft: 'auto', marginRight: 'auto', borderRadius: '16px',
                    boxShadow: '2px 2px 2px 2px black'}} 
            />
        </>
    )
}

export default GameMenu
