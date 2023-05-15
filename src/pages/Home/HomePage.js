import React, { useState, useEffect } from 'react'
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
        <div className={`flex items-center justify-center h-screen`}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="w-3/4 max-w-5xl">
                    <div className="max-w-xl">
                        <p className="text-6xl text-bold mb-3">Heyo! </p>
                        <p>I'm Devon Riley, a CMS engineer with a passion for building custom Wordpress themes and highly useable backends to boot. My primary tools are php, javascript, and css - but I'm working to become a skilled full stack developer with React/Vue and Express.</p>
                    </div>

                    <div className="grid grid-cols-4 gap-5 mt-5 border-t-4 border-black border-solid">
                        <div className="mb-4 leading-none pl-4 pt-4 border-l-4 border-black border-solid">
                            <span className="text-sm font-semibold leading-none">Languages</span>
                            <ul className="text-sm">
                                <li>JavaScript</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div className="mb-4 leading-none pl-4 pt-4 border-l-4 border-black border-solid">
                            <span className="text-sm font-semibold">Frameworks</span>
                            <ul className="text-sm">
                                <li>Bootstrap / Tailwind</li>
                                <li>React / Vue</li>
                            </ul>
                        </div>
                        <div className="mb-4 leading-none pl-4 pt-4 border-l-4 border-black border-solid">
                            <span className="text-sm font-semibold">Databases</span>
                            <ul className="text-sm">
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="mb-4 leading-none pl-4 pt-4 border-l-4 border-black border-solid">
                            <span className="text-sm font-semibold">Platforms</span>
                            <ul className="text-sm">
                                <li>Wordpress</li>
                                <li>Shopify</li>
                                <li>Core dna</li>
                            </ul>
                        </div>
                    </div>

                    {/* <h2>Work</h2>
                    {data.fields.project.map(project => (
                        <div>
                            <p><strong>{project.fields.title}</strong></p>
                            <p>{project.fields.description}</p>
                        </div>
                    ))} */}
                </div>
            )}
        </div>
    )
}

export default HomePage