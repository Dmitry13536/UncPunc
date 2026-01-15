import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/Root"
import Error from "./components/fallback/Error"
import Menu from "./components/Outlet/Menu"
import Welcome from "./components/Outlet/Welcome"
import Settings from "./components/Outlet/Settings"
import { lazy } from "react"
var Clicker = lazy(() => import('./components/Outlet/Game/Clicker'))

var Routes = () => {

  var routerCfg = [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/settings',
          element: <Settings />
        },
        {
          path: '/Clicker',
          element: <Clicker />
        }
      ]
    },
  ]

  var router = createBrowserRouter(routerCfg)

  return <RouterProvider router={router} />
}

export default Routes
