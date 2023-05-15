import { createContext, useState } from 'react'

const AnimateDirectionContext = createContext()

export const AnimateDirectionProvider = ({ children }) => {
    const [animateDirection, setAnimateDirection] = useState('down')

    return (
        <AnimateDirectionContext.Provider value={{ animateDirection, setAnimateDirection }}>
            {children}
        </AnimateDirectionContext.Provider>
    )
}

export default AnimateDirectionContext