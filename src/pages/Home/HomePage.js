import React, { useState, useEffect } from 'react'
import './Home.css'
// import fetchContent from '../../services/ContentfulService'

const HomePage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const content = await fetchContent({ title: 'Home' })
    //         setData(content)
    //         setIsLoading(false)
    //     }

    //     fetchData()
    // }, [])

    return (
        <div className={`homeContent flex items-center justify-center`}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="w-5/6 md:w-3/4 max-w-5xl">
                    <div className="max-w-xl">
                        <p className="text-6xl text-bold mb-3">Heyo! </p>
                        <p className="text-md">I'm Devon Riley, a CMS engineer with over a decade of experience building custom Wordpress themes alongside tailored backends. My primary skillset is with PHP, JavaScript, and CSS. However, I'm actively working to further enhance my proficiency as a full-stack developer, with a particular focus on React and Express.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 mt-5">
                        <div className="md:mb-4 leading-none pl-4 py-4 border-t-4 md:border-t-0 md:border-l-4 border-black border-solid">
                            <p className="text-lg mb-4 font-semibold leading-none">Languages</p>
                            <ul className="text-md space-y-2">
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="md:mb-4 leading-none pl-4 py-4 border-t-4 md:border-t-0 md:border-l-4 border-black border-solid">
                            <p className="text-lg mb-4 font-semibold leading-none">Frameworks</p>
                            <ul className="text-md space-y-2">
                                <li>Bootstrap / Tailwind</li>
                                <li>React / Vue</li>
                            </ul>
                        </div>
                        <div className="md:mb-4 leading-none pl-4 py-4 border-t-4 md:border-t-0 md:border-l-4 border-black border-solid">
                            <p className="text-lg mb-4 font-semibold leading-none">Databases</p>
                            <ul className="text-md space-y-2">
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="md:mb-4 leading-none pl-4 py-4 border-t-4 md:border-t-0 md:border-l-4 border-black border-solid">
                            <p className="text-lg mb-4 font-semibold leading-none">Platforms</p>
                            <ul className="text-md space-y-2">
                                <li>Wordpress</li>
                                <li>Shopify</li>
                                <li>Core dna</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage