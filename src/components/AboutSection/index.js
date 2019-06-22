import React, { Component } from 'react'
import { Button } from 'reactstrap'

import './style.scss'

class AboutSection extends Component {
    render() {
        return (
            <div className='about-section'>
                <h1 className='header'>About</h1>
                <div className='bio-description'>
                    Hi, I'm Leon! I am currently a development engineer at Finisar, where I design and test optical transceivers.
                    While my background is in electrical engineering, I have been developing my software skills by taking online courses and working on personal projects.
                    I am very interested in entering the software industry and bringing a different perspective to current problems.
                </div>
                <div className='contact'>
                    <h1 className='skills-header'>Skills</h1>
                    <img className='skills-1' src={require('../../../public/skills-1.png')}/>
                    <img className='skills-2' src={require('../../../public/skills-2.png')}/>
                    <img className='skills-3' src={require('../../../public/skills-3.png')}/>
                    <img className='skills-4' src={require('../../../public/skills-4.png')}/>
                    <img className='skills-5' src={require('../../../public/skills-5.png')}/>
                    <img className='skills-6' src={require('../../../public/skills-6.png')}/>
                </div>     
            </div>
        )
    }
}

export default AboutSection