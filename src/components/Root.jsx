import { Outlet } from "react-router-dom"
import sass from '../sass/Root.module.scss'
import { bgAtom } from "../atoms/bgAtom"
import { useAtom } from "jotai"
import { useEffect } from "react"

var Root = () => {

    var [ bg, bgSet ] = useAtom(bgAtom)

    useEffect(() => {
        if ( localStorage.getItem('levelNow') % 20 === 0 ) {
                switch ( localStorage.getItem('bg') ) {
                    case 'RootDefaultBg':
                        bgSet('RootMontainBg')
                        break
                    case 'RootMontainBg':
                        bgSet('RootVolcanoBg')
                        break
                    case 'RootVolcanoBg':
                        bgSet('RootWaterBg')
                        break
                    case 'RootWaterBg':
                        bgSet('RootWinterBg')
                        break
                    case 'RootWinterBg':
                        bgSet('RootMontainBg')
                        break
                }
        }
        console.info('bg checked')   
    }, [])

    return (
        <div id={sass.Root} className={sass[bg]}>
            <Outlet />
        </div>
    )
}

export default Root
