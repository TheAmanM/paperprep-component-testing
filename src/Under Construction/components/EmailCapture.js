import React from 'react'
import './EmailCapture.css'

const EmailCapture = () => {
    return (
        <div className="email-capture">
            <div className="capture">
                <input type="text" className='capture-email' placeholder='Please enter your email address' />
                <button className='capture-button'>Notify Me</button>
            </div>
            <div className="notify-text">
                <p className="text">
                    -  Notify me when app is launched  -
                </p>
            </div>
        </div>
    )
}

export default EmailCapture