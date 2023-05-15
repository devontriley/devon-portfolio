import { NavLink, useLocation } from 'react-router-dom'

const HeaderNavLink = ({ name, path }) => {
    const location = useLocation()
    const linkColor = ((name === 'Work' && location.pathname.includes('work')) || location.pathname === path) ? 'text-red-500' : 'text-black'
    return (
        <li className="inline-block">
            <NavLink 
            key={path}
            to={path}
            className={`inline-block mx-3 text-lg leading-none ${linkColor}`}
        >
            {name}
        </NavLink>
        </li>
    )
}

const Header = ({ routes }) => {
    return (
        <>
            <span className={`absolute z-30 top-0 left-1/2 -translate-x-1/2 text-xl border border-t-0 border-solid border-black rounded-b-lg py-2 px-7 bg-black text-white`}>Devon Riley</span>
            <nav className="absolute z-30 bottom-5 left-1/2 -translate-x-1/2 border-solid border border-black rounded-full py-3 px-7 bg-white drop-shadow-md">
                <ul>
                    <HeaderNavLink name="About" path="/" />
                    <HeaderNavLink name="Work" path="/work" />
                    <HeaderNavLink name="Contact" path="/contact" />
                </ul>
            </nav>
        </>
    )
}

export default Header