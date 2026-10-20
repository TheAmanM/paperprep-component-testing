import React from 'react'
import Heading from './components/Heading'
import FeatureText from './components/FeatureText'
import EmailCapture from './components/EmailCapture'
import GraduationImage from './components/GraduationImage'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className="max" />
            <div className="grid">
                <div className="margin">
                    <Heading />
                    <FeatureText />
                </div>
                <GraduationImage />
            </div>
            <div className="max2" />
            <EmailCapture />
        </div>
    )
}

export default LandingPage