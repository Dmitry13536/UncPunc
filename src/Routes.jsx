import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/Root"
import Error from "./components/fallback/Error"
import Menu from "./components/Outlet/Menu"
import Welcome from "./components/Outlet/Welcome"
import Settings from "./components/Outlet/Settings"

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
        }
      ]
    },
    {
      path: '/menu',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Menu />
        }
      ]
    },
    {
      path: '/settings',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Settings />
        }
      ]
    }
  ]

  var router = createBrowserRouter(routerCfg)

  return <RouterProvider router={router} />
}

export default Routes
