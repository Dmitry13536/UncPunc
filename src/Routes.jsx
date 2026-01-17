import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/Root"
import Error from "./components/fallback/Error"
import Menu from "./components/Outlet/Menu"
import Welcome from "./components/Outlet/Welcome"
import Settings from "./components/Outlet/Settings"
import { lazy } from "react"
var Clicker = lazy(() => import('./components/Outlet/Game/Clicker'))
import Updates from "./components/Outlet/Game/ClickerOutlet/Updates"
import GameMenu from "./components/Outlet/Game/ClickerOutlet/GameMenu"
import LevelsList from "./components/Outlet/Game/ClickerOutlet/LevelsList"

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
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'settings',
          element: <Settings />
        },
        {
          path: 'clicker',
          element: <Clicker />,
          children: [
            {
              path: 'menu',
              element: <GameMenu />
            },
            {
              path: 'updates',
              element: <Updates />
            },
            {
              path: 'levels',
              element: <LevelsList />
            }
          ]
        }
      ]
    },
  ]

  var router = createBrowserRouter(routerCfg)

  return <RouterProvider router={router} />
}

export default Routes
