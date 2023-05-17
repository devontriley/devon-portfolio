import { useRef, useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './WorkDetail.css'

const work = [
    {
        name: 'Vinfen',
        details: 'Wordpress Multisite, WooCommerce, Bootstrap, Gulp',
        companyDescription: 'Vinfen is a leading nonprofit that specializes in providing community-based services to individuals with disabilities.',
        description: 'For years Vinfen was stuck with an overpriced, outdated, and subpar hosting provider. I migrated their five websites to a new hosting provider under a single Wordpress Multisite - allowing the administrators to easily manage everything from a single dashboard. I also built two custom Wordpress themes with an extensive module library to recreate their existing content with a modern look and feel.',
        image: 'vinfen_ui_mockup.jpg',
        url: 'https://vinfen.org',
        headerColor: '#BDE551',
        textColor: '#ffffff',
        bgColor: '#03667C'
    },
    {
        name: 'Alarad Capital',
        details: 'Wordpress, GSAP, Bootstrap, Webpack',
        companyDescription: 'Alarad Capital is an investment firm built to grow the wealth of it\'s investors for the long term.',
        description: 'The primary challenge to overcome was true differentiation from the competition. I helped build a custom Wordpress theme based on the beautiful design system my partners developed. We thoughtfully incorporated animations and transitions to create an elegant and sophisticated feel.',
        image: 'alarad_ui_mockup.jpg',
        url: 'https://alaradcapital.com',
        headerColor: '#D89663',
        textColor: '#ffffff',
        bgColor: '#13220E'
    },
    {
        name: 'RANDYS Worldwide',
        details: 'Core dna, Vue.js, Bootstrap, Webpack',
        companyDescription: 'RANDYS Worldwide is the leading supplier in the United States for differential gears, axles, drivelines, and more.',
        description: 'My team was hired to help RANDYS improve their user interface, assist in developing new features, and provide ongoing development support. The most exicting feature I helped develop was the Parts Portal - a Vue.js "garage" allowing users to filter results based on their selected vehicle. I also implemented a fresh new UI that included new category and product display pages.',
        image: 'randys_ui_mockup.jpg',
        url: 'https://randysworldwide.com',
        headerColor: '#111111',
        textColor: '#ffffff',
        bgColor: '#D23B11'
    },
    {
        name: 'Steel Root',
        details: 'Wordpress, Bootstrap, Gulp',
        companyDescription: 'Steel Root is the first cybersecurity firm to provide end-to-end services for the U.S. Defense Industrial Base.',
        description: 'Visual identity and publisher useablility were the main goals of this project. I developed a custom Wordpress theme with a particular focus on content management. I built a modular system that allowed the stakeholders to easily create and edit custom pages.',
        image: 'steelroot_ui_mockup.jpg',
        url: 'https://steelroot.us',
        headerColor: '#F7525A',
        textColor: '#ffffff',
        bgColor: '#16254E'
    },
    {
        name: 'Safesoak',
        details: 'Shopify, Custom Liquid theme',
        companyDescription: 'Safesoak is a product that allows people with neuropahty to safely soak their feet.',
        description: 'This project was my first opportunity to build a custom Shopify theme. I learned the Liquid templating language which enabled me to create an easily editable backend as well as replicate the UI system that my team designed.',
        image: 'safesoak_ui_mockup.jpg',
        url: 'https://mysafesoak.com',
        headerColor: '#6ECBE8',
        textColor: '#ffffff',
        bgColor: '#282D7A'
    },
    {
        name: 'Transhealth',
        details: 'Wordpress, GSAP, Paper.js, Bootstrap, Gulp',
        companyDescription: 'Transhealth is a trans-led organization serving trans and gender-diverse individuals and families.',
        description: 'I\'m proud to have had the opportunity to work with such a fantastic organization. I was tasked with creating a new website that brought their new visual identity to the web. I developed a custom Wordpress theme that was lightweight and easily editable.',
        image: 'transhealth_ui_mockup.jpg',
        url: 'https://transhealth.org',
        headerColor: '#253B5A',
        textColor: '#ffffff',
        bgColor: '#6BA0C1'
    },
    {
        name: 'Fully Human Supplements',
        details: 'Wordpress, WooCommerce, Bootstrap, Gulp',
        companyDescription: 'Fully Human Supplements offer all-natural, plant-based supplements to fight chronic inflammation.',
        description: 'Fully Human was in need of an ecommerce website that could effectively promote their brand, educate their customers, and sell their products. I built a custom Wordpress theme that utilized WooCommerce to satisfy the needs of the stakeholders and their customers.',
        image: 'fhs_ui_mockup.jpg',
        url: 'https://fullyhumansupplements.com',
        headerColor: '#01F8E0',
        textColor: '#ffffff',
        bgColor: '#019889'
    },
    {
        name: 'Universal Stone',
        details: 'Wordpress, Bootstrap, Gulp, UI Design',
        companyDescription: 'Universal Stone is a leading importer of top quality natural stone products from around the world',
        description: 'Universal Stone had been stuck with a set of poorly designed and developed Wordpress websites for years. I merged both sites into one with an updated UI. I\'m currently working on several new features including a Dropbox integration for users to upload project photos, and a live product inventory that pulls data from their content management software.',
        image: 'usi_ui_mockup.jpg',
        url: 'https://unistoneimports.com',
        headerColor: '#273814',
        textColor: '#ffffff',
        bgColor: '#6FA239'
    },
    {
        name: 'DriveForce',
        details: 'Wordpress, GSAP, Bootstrap, Gulp',
        companyDescription: 'DriveForce sells golf\'s first-ever pre-round performance blend, designed to keep you at your best for a full 18.',
        description: 'DriveForce is a startup that worked with my team from their conception. Their website needed to strongly convey their brand, and effectively market and sell their product. I used Wordpress and WooCommerce to develop a custom theme with a modular content system that was used to achieve these goals.',
        image: 'driveforce_ui_mockup.jpg',
        url: 'https://devonr52.sg-host.com',
        headerColor: '#DB4443',
        textColor: '#ffffff',
        bgColor: '#112824'
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
                    style={{ backgroundColor: `${work[currentWorkIndex].bgColor}`}}
                    data-animate-out={animateOut} 
                    data-animate-direction={animateDirection}
                    ref={nodeRef}
                >
                    <div className="workDetailImage relative z-20 overflow-hidden rounded-xl lg:order-2">
                        <img src={`/images/${work[currentWorkIndex].image}`} className="workImage absolute z-20 object-cover w-full h-full select-none" alt="" />
                        <img src={crossfadeImage} className="absolute z-0 object-cover w-full h-full select-none" />
                    </div>

                    <div className="workDetailContent h-full relative z-10 flex pt-7 sm:pt-0 sm:items-center justify-center">
                        <div className="workDescription" style={{ color: `${work[currentWorkIndex].textColor}` }}>
                            <h1 className="text-4xl font-bold mb-3 select-none" style={{ color: `${work[currentWorkIndex].headerColor}`}}>
                                <a href={work[currentWorkIndex].url} target="_blank">
                                    {work[currentWorkIndex].name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ml-3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg>
                                </a>
                            </h1>
                            {work[currentWorkIndex].companyDescription && <p className="text-sm italic">{work[currentWorkIndex].companyDescription}</p>}
                            <div className="mt-5">
                                <p className="font-bold">{work[currentWorkIndex].details}</p>
                                <p className="select-none">{work[currentWorkIndex].description}</p>
                            </div>
                        </div>

                        <div className="workDetailControls">
                            <button 
                                onClick={() => handleClick('prev')} 
                                className="p-3 pr-5 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </button>
                            <button 
                                onClick={() => handleClick('next')} 
                                className="p-3 pr-5 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </CSSTransition>
        </div>
    )
}

export default WorkDetailPage