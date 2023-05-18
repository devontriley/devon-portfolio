import React, { createRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Header from './components/Header/Header'
import { AnimateDirectionProvider } from './AnimateDirectionContext'
import { routes } from './routes'
import './index.css'
import reportWebVitals from './reportWebVitals';

const App = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const nodeRef = createRef(null)
  const transitionClassPrefix = location.pathname.includes('/work/') ? 'work-detail-page' : (( location.pathname === '/work' ) ? 'work' : 'page')
  const transitionInDuration = location.pathname.includes('/work/') ? 1000 : (( location.pathname === '/work' ) ? 5000 : 1000)
  const transitionOutDuration = location.pathname.includes('/work/') ? 500 : 500

  // Preload images for Work Detail Pages
  useEffect(() => {
    const images = ['alarad_ui_mockup.jpg', 'driveforce_ui_mockup.jpg', 'fhs_ui_mockup.jpg', 'randys_ui_mockup.jpg', 'safesoak_ui_mockup.jpg', 'steelroot_ui_mockup.jpg', 'transhealth_ui_mockup.jpg', 'usi_ui_mockup.jpg', 'vinfen_ui_mockup.jpg']

    images.forEach((image) => {
        const img = new Image()
        img.src = 'images/'+image
    })
  }, [])

  const isAndroidMobile = () => {
    return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
  }

  // Resize container height when srolling on android devices to account for browser bar
  useEffect(() => {
    const adjustDivHeight = () => {
      const myDiv = document.getElementById('root');
      if (isAndroidMobile() && window.screen.availHeight > window.innerHeight) {
        const offset = window.screen.availHeight - window.innerHeight;
        myDiv.style.height = `calc(100vh - ${offset}px)`;
      }
    }

    window.addEventListener('resize', adjustDivHeight);
    adjustDivHeight();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustDivHeight);
    };
  }, []);
  
  useEffect(() => {
    const adjustNavPosition = () => {
      const navElement = document.getElementById('primaryNav');
      const containerHeight = document.getElementById('root').clientHeight;
      const windowHeight = window.innerHeight;

      navElement.style.position = 'absolute';
      navElement.style.bottom = '20'

      console.log('reposition nav')
    };

    // Call the adjustNavPosition function initially and on window resize
    window.addEventListener('resize', adjustNavPosition);
    adjustNavPosition();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustNavPosition);
    };
  }, []);

  return (
    <>
      <Header routes={routes.filter((route) => route.name !== 'Work Detail')} />

      <AnimateDirectionProvider>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={{
              enter: transitionInDuration,
              exit: transitionOutDuration
            }}
            classNames={transitionClassPrefix}
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </AnimateDirectionProvider>

      <div className="noise"></div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();