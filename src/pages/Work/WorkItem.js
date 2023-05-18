import React from 'react'
import { Link } from 'react-router-dom'

const WorkItem = ({ name, classes, style }) => {
    return (
        <li className={`mb-10 relative`}>
            <Link to={`/work/${name}`} className="relative z-10 font-thin hover:text-blue-500">{name}</Link>
            <div className="hidden bg-red-500 absolute -z-50 inset-1/2 -translate-x-1/2 -translate-y-1/2" style={{ height: '300px', width: '500px' }}></div>
        </li>
    )
}

export default WorkItem