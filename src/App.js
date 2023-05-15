import { createRef } from 'react'
import { createBrowserRouter, RouterProvider, NavLink, useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import HomePage from './pages/Home/HomePage'
import WorkPage from './pages/Work/WorkPage'
import WorkDetailPage from './pages/Work/WorkDetailPage'
import ContactPage from './pages/Contact/ContactPage'

const routes = [
  { path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef() },
  { path: '/work', name: 'Work', element: <WorkPage />, nodeRef: createRef() },
  { path: '/work/:name', name: 'Work Detail', element: <WorkDetailPage />, nodeRef: createRef(), },
  { path: '/contact', name: 'Contact', element: <ContactPage />, nodeRef: createRef(), },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const Example = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <>
      <ul>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              {route.name}
            </NavLink>
          ))}
      </ul>

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App