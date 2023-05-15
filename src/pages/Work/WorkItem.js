import React from 'react'
import { Link } from 'react-router-dom'

const WorkItem = ({ name, classes, style }) => {
    return (
        <li className={`p-3 mb-3 relative`}>
            <Link to={`/work/${name}`} className="relative z-10 font-thin hover:font-normal">{name}</Link>
            <div className="hidden bg-red-500 absolute -z-50 inset-1/2 -translate-x-1/2 -translate-y-1/2" style={{ height: '300px', width: '500px' }}></div>
        </li>
    )
}

export default WorkItem