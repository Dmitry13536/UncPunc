import { Outlet } from "react-router-dom"
import sass from '../sass/Root.module.scss'

var Root = () => {
    return (
        <div className={sass.Root}>
            <Outlet />
        </div>
    )
}

export default Root
