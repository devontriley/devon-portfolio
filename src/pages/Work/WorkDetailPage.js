import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { workDetailPages } from '../../routes'
import AnimateDirectionContext from '../../AnimateDirectionContext'
import './WorkDetail.css'

const WorkDetailPage = ({ WorkDetailPage }) => {
    const { name } = useParams()
    const currentIndex = workDetailPages.findIndex((work) => work.name === name)
    const prevWork = (currentIndex === 0) ? workDetailPages[workDetailPages.length - 1].name : workDetailPages[currentIndex - 1].name
    const nextWork = (currentIndex === workDetailPages.length - 1) ? workDetailPages[0].name : workDetailPages[currentIndex + 1].name
    const { animateDirection, setAnimateDirection } = useContext(AnimateDirectionContext)

    const handleClick = (direction) => {
        console.log(direction)
        setAnimateDirection(direction)
    }

    let content, image
    if ( name === 'Vinfen' ) {
        content = 'This is the Vinfen content'
        image = '/images/fpo_1.png'
    } else if ( name === 'Alarad' ) {
        content = 'This is the Alarad content'
        image = '/images/fpo_2.png'
    } else if ( name === 'Randys Worldwide' ) {
        content = 'This is the Randys content'
        image = '/images/fpo_3.png'
    } else if ( name === 'Steelroot' ) {
        content = 'This is the Steelroot content'
        image = '/images/fpo_4.png'
    } else if ( name === 'Safesoak' ) {
        content = 'This is the Safesoak content'
        image = '/images/fpo_5.png'
    } else if ( name === 'Transhealth' ) {
        content = 'This is the Transhealth content'
        image = '/images/fpo_6.png'
    } else if ( name === 'Fully Human Supplements' ) {
        content = 'This is the Fully Human content'
        image = '/images/fpo_7.png'
    } else if ( name === 'Universal Stone Imports' ) {
        content = 'This is the USI content'
        image = '/images/fpo_8.png'
    } else if ( name === 'DriveForce' ) {
        content = 'This is the DriveForce content'
        image = '/images/fpo_9.png'
    }

    return (
        <div className="w-screen h-screen grid grid-cols-2" data-animate-direction={animateDirection}>
            <div className="workDetailContent relative flex items-center justify-center bg-slate-500">
                <div className="workDescription" style={{ width: '80%' }}>
                    <h1 className="text-4xl font-bold mb-3">{name}</h1>
                    <p>{content}</p>
                </div>

                <div className="absolute right-0">
                    <Link to={`/work/${prevWork}`} onClick={() => handleClick('up')} className="block p-3 my-3 bg-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                    </Link>
                    <Link to={`/work/${nextWork}`} onClick={() => handleClick('down')} className="block p-3 my-3 bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="workImage">
                <img src={image} className="object-cover w-full h-full" alt="" />
            </div>
        </div>
    )
}

export default WorkDetailPage