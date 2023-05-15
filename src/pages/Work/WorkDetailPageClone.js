import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './WorkDetail.css'

const work = [
    {
        name: 'Vinfen',
        details: 'Wordpress, WooCommerce, Bootstrap, Gulp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu semper dolor. Fusce at tempus enim. Pellentesque magna justo, venenatis sit amet erat ut, consequat maximus ex. Proin interdum ac lectus sed accumsan. Sed finibus lacus id nisl sollicitudin, non lacinia dolor tincidunt. Praesent quis lorem nulla. Curabitur sed libero eget arcu condimentum vestibulum. Nullam condimentum, tortor non pellentesque maximus, felis elit vestibulum risus, quis vulputate magna tellus a libero. Vestibulum sed vehicula massa, in luctus sapien. In rutrum erat non molestie elementum. Praesent fermentum nibh in ex pellentesque lobortis. Etiam placerat dignissim mi, vitae rhoncus ligula ornare sit amet. Etiam eget interdum diam.',
        image: 'fpo_1.png'
    },
    {
        name: 'Alarad',
        details: 'Wordpress, GSAP, Bootstrap, Webpack',
        description: 'This is the Alarad description',
        image: 'fpo_2.png'
    },
    {
        name: 'Randys Worldwide',
        details: 'Core dna, Vue.js, Bootstrap, Webpack',
        description: 'This is the Randys Worldwide description',
        image: 'fpo_3.png'
    },
    {
        name: 'Steelroot',
        details: 'Wordpress, Bootstrap, Gulp',
        description: 'This is the Steelroot description',
        image: 'fpo_4.png'
    },
    {
        name: 'Safesoak',
        details: 'Shopify, Custom Liquid theme',
        description: 'This is the Safesoak description',
        image: 'fpo_5.png'
    },
    {
        name: 'Transhealth',
        details: 'Wordpress, GSAP, Paper.js, Bootstrap, Gulp',
        description: 'This is the Transhealth description',
        image: 'fpo_6.png'
    },
    {
        name: 'Fully Human Supplements',
        details: 'Wordpress, WooCommerce, Bootstrap, Gulp',
        description: 'This is the FHS description',
        image: 'fpo_7.png'
    },
    {
        name: 'Universal Stone Imports',
        details: 'Wordpress, Bootstrap, Gulp',
        description: 'This is the USI description',
        image: 'fpo_8.png'
    },
    {
        name: 'DriveForce',
        details: 'Wordpress, GSAP, Bootstrap, Gulp',
        description: 'This is the DriveForce description',
        image: 'fpo_9.png'
    }
]

const WorkDetailPage = ({ WorkDetailPage }) => {
    const { name } = useParams()
    const nodeRef = useRef(null)
    const [inProp, setInProp] = useState(true)
    const [currentWorkIndex, setCurrentWorkIndex] = useState(work.findIndex(w => w.name === name))
    const [animateDirection, setAnimateDirection] = useState('next')
    const [animateOut, setAnimateOut] = useState(false)
    const [crossfadeImage, setCrossfadeImage] = useState('')

    const handleClick = (direction = 'prev') => {
        let nextIndex = (currentWorkIndex + (direction === 'prev' ? -1 : 1) + work.length) % work.length

        setCrossfadeImage('/images/'+work[nextIndex].image)
        setAnimateDirection(direction)
        setInProp(false)

        setTimeout(() => {
            setCurrentWorkIndex(nextIndex)
            setInProp(true)
        }, 500)
        
        // setAnimateOut(true)

        // setTimeout(() => {
        //     setCurrentWorkIndex(nextIndex)
        //     setAnimateOut(false)
        // }, 300)
    }

    return (
        <div>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="work-detail">
                <div className="workDetailGrid w-screen h-screen grid lg:grid-flow-col lg:grid-cols-2"
                    data-animate-out={animateOut} 
                    data-animate-direction={animateDirection}
                    ref={nodeRef}
                >
                    <div className="workDetailImage relative z-20 overflow-hidden lg:order-2">
                        <img src={`/images/${work[currentWorkIndex].image}`} className="workImage absolute z-20 object-cover w-full h-full select-none" alt="" />
                        <img src={crossfadeImage} className="absolute z-0 object-cover w-full h-full select-none" />
                    </div>

                    <div className="workDetailContent h-full relative z-10 flex items-center justify-center">
                        <div className="workDescription" style={{ width: '80%' }}>
                            <h1 className="text-4xl font-bold mb-3 select-none">{work[currentWorkIndex].name}</h1>
                            <p className="font-bold">{work[currentWorkIndex].details}</p>
                            <p className="select-none">{work[currentWorkIndex].description}</p>
                        </div>

                        <div className="workDetailControls absolute right-0">
                            <a onClick={() => handleClick('prev')} className="block p-3 pr-5 my-3 bg-red-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </a>
                            <a onClick={() => handleClick('next')} className="block p-3 pr-5 my-3 bg-blue-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </CSSTransition>
        </div>
    )
}

export default WorkDetailPage