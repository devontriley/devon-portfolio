import { createRef } from 'react'
import HomePage from './pages/Home/HomePage'
import WorkPage from './pages/Work/WorkPage'
import WorkDetailPage from './pages/Work/WorkDetailPageClone'
import ContactPage from './pages/Contact/ContactPage'

export const workDetailPages = [
    { name: 'Vinfen' },
    { name: 'Alarad Capital' },
    { name: 'RANDYS Worldwide' },
    { name: 'Steel Root' },
    { name: 'Safesoak' },
    { name: 'Transhealth' },
    { name: 'Fully Human Supplements' },
    { name: 'Universal Stone' },
    { name: 'DriveForce' }
]

export const routes = [
    { path: '/', name: 'Home', element: <HomePage /> },
    { path: '/work', name: 'Work', element: <WorkPage /> },
    { path: '/work/:name', name: 'Work Detail', element: <WorkDetailPage workDetailPages={workDetailPages} /> },
    { path: '/contact', name: 'Contact', element: <ContactPage /> },
]