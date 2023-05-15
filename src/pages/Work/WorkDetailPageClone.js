import { useRef, useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './WorkDetail.css'

const work = [
    {
        name: 'Vinfen',
        details: 'Wordpress Multisite, WooCommerce, Bootstrap, Gulp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu semper dolor. Fusce at tempus enim. Pellentesque magna justo, venenatis sit amet erat ut, consequat maximus ex. Proin interdum ac lectus sed accumsan. Sed finibus lacus id nisl sollicitudin, non lacinia dolor tincidunt. Praesent quis lorem nulla. Curabitur sed libero eget arcu condimentum vestibulum. Nullam condimentum, tortor non pellentesque maximus, felis elit vestibulum risus, quis vulputate magna tellus a libero. Vestibulum sed vehicula massa, in luctus sapien. In rutrum erat non molestie elementum. Praesent fermentum nibh in ex pellentesque lobortis. Etiam placerat dignissim mi, vitae rhoncus ligula ornare sit amet. Etiam eget interdum diam.',
        image: 'vinfen_ui_mockup.jpg',
        url: 'https://vinfen.org',
        headerColor: '#037993'
    },
    {
        name: 'Alarad',
        details: 'Wordpress, GSAP, Bootstrap, Webpack',
        description: 'This is the Alarad description',
        image: 'alarad_ui_mockup.jpg',
        url: 'https://alaradcapital.com',
        headerColor: '#C48A5C'
    },
    {
        name: 'Randys Worldwide',
        details: 'Core dna, Vue.js, Bootstrap, Webpack',
        description: 'This is the Randys Worldwide description',
        image: 'randys_ui_mockup.jpg',
        url: 'https://randysworldwide.com',
        headerColor: '#ED481C'
    },
    {
        name: 'Steelroot',
        details: 'Wordpress, Bootstrap, Gulp',
        description: 'This is the Steelroot description',
        image: 'steelroot_ui_mockup.jpg',
        url: 'https://steelroot.us',
        headerColor: '#EE4449'
    },
    {
        name: 'Safesoak',
        details: 'Shopify, Custom Liquid theme',
        description: 'This is the Safesoak description',
        image: 'safesoak_ui_mockup.jpg',
        url: 'https://mysafesoak.com',
        headerColor: '#2F358F'
    },
    {
        name: 'Transhealth',
        details: 'Wordpress, GSAP, Paper.js, Bootstrap, Gulp',
        description: 'This is the Transhealth description',
        image: 'transhealth_ui_mockup.jpg',
        url: 'https://transhealth.org',
        headerColor: '#EE6452'
    },
    {
        name: 'Fully Human Supplements',
        details: 'Wordpress, WooCommerce, Bootstrap, Gulp',
        description: 'This is the FHS description',
        image: 'fhs_ui_mockup.jpg',
        url: 'https://fullyhumansupplements.com',
        headerColor: '#007BA7'
    },
    {
        name: 'Universal Stone Imports',
        details: 'Wordpress, Bootstrap, Gulp',
        description: 'This is the USI description',
        image: 'usi_ui_mockup.jpg',
        url: 'https://unistoneimports.com',
        headerColor: '#81BB42'
    },
    {
        name: 'DriveForce',
        details: 'Wordpress, GSAP, Bootstrap, Gulp',
        description: 'This is the DriveForce description',
        image: 'driveforce_ui_mockup.jpg',
        url: 'https://devonr52.sg-host.com',
        headerColor: '#437663'
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

    const handleClick = useCallback((direction = 'prev') => {
        let nextIndex = (currentWorkIndex + (direction === 'prev' ? -1 : 1) + work.length) % work.length

        setCrossfadeImage('/images/'+work[nextIndex].image)
        setAnimateDirection(direction)
        setInProp(false)

        setTimeout(() => {
            setCurrentWorkIndex(nextIndex)
            setInProp(true)
        }, 500)
    }, [currentWorkIndex])

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'ArrowDown') {
            handleClick('next')
          } else if (event.key === 'ArrowUp') {
            handleClick('prev')
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleClick]);

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
                            <h1 className="text-4xl font-bold mb-3 select-none" style={{ color: `${work[currentWorkIndex].headerColor}`}}>
                                <a href={work[currentWorkIndex].url} target="_blank">
                                    {work[currentWorkIndex].name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg>
                                </a>
                            </h1>
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