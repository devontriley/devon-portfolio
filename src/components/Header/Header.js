import { NavLink, useLocation } from 'react-router-dom'

const HeaderNavLink = ({ name, path }) => {
    const location = useLocation()
    const linkColor = ((name === 'Work' && location.pathname.includes('work')) || location.pathname === path) ? 'text-blue-500' : 'text-black'
    return (
        <li className="inline-block">
            <NavLink 
            key={path}
            to={path}
            className={`inline-block mx-3 text-lg leading-none align-middle ${linkColor}`}
        >
            {name}
        </NavLink>
        </li>
    )
}

const Header = ({ routes }) => {
    return (
        <>
            <span className={`fixed z-30 top-0 left-1/2 -translate-x-1/2 text-xl drop-shadow-lg rounded-b-lg py-2 px-7 bg-black text-white whitespace-nowrap`}>Devon Riley</span>
            <nav id="primaryNav" className="fixed z-30 bottom-5 left-1/2 -translate-x-1/2 border-solid border border-black rounded-full py-3 px-4 md:px-7 bg-white drop-shadow-md">
                <ul className="whitespace-nowrap">
                    <HeaderNavLink name="About" path="/" />
                    <HeaderNavLink name="Work" path="/work" />
                    <HeaderNavLink name="Contact" path="/contact" />
                    <li className="inline-block leading-none align-middle">
                        <a className="inline-block mx-3" href="https://github.com/devontriley" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header