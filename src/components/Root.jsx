import { Outlet } from "react-router-dom"
import sass from '../sass/Root.module.scss'
import { useEffect } from "react"

var Root = () => {

    var bg = localStorage.getItem('bg')

    return (
        <div id={sass.Root} className={sass[bg]}>
            <Outlet />
        </div>
    )
}

export default Root
