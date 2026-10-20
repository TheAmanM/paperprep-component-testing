import React from 'react'
import Title from './components/Title'
import FeatureText from './components/FeatureText'
import EmailCapture from './components/EmailCapture'
import './UnderConstruction.css'

import test from './../services/pdf'
import { useEffect } from 'react'

const UnderConstruction = () => {
    /* const testPDF = useEffect(() => {
        test('https://papers.gceguide.com/A%20Levels/Mathematics%20-%20Further%20(9231)/2019/9231_s19_qp_11.pdf')
    }, []) */

    return (
        <div className="under-construction">
            <Title />
            <FeatureText />
            <EmailCapture />
        </div>
    )
}

export default UnderConstruction