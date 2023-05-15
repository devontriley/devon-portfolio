import React from 'react'

const ContactPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-3xl text-center">
                <h1 className="text-6xl font-bold">Contact</h1>
                <p>
                    <a href="mailto:devontriley@gmail.com" target="_blank" rel="noopener noreferrer">
                    devontriley@gmail.com    
                    </a>
                    <br />
                    <a href="tel:5083152670" target="_blank" rel="noopener noreferrer">508.315.2670</a>
                </p>
            </div>
        </div>
    )
}

export default ContactPage