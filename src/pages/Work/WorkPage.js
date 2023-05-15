import React, { useState, useEffect } from 'react'
import WorkItem from './WorkItem'
import { workDetailPages } from '../../routes'
import './Work.css'

const WorkPage = () => {
    return (
        <div className="absolute w-screen flex justify-center overflow-y-auto" style={{ height: 'calc(100vh - 145px)', top: '60px' }}>
            <div className="text-center max-w-4xl">
                <ul className="text-7xl">
                    {workDetailPages.map((item, index) => {
                        const delay = (index * 50) + 'ms'
                        return <WorkItem key={index} name={item.name} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WorkPage