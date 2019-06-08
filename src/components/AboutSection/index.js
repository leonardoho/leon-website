import React, { Component } from 'react'

import './style.scss'

class AboutSection extends Component {
    render() {
        return (
            <div className='about-section'>
                <div className='background-image'></div>
                <div className='content'>
                    <h1 className='header'>About</h1>
                    <div className='bio-description'>
                        Hi, I'm Leon. I am currently working at Finisar as a development engineer for high performance transceivers. 
                        I like to work on software projects in my free time, including a mobile game app. 
                    </div>         
                </div>
            </div>
        )
    }
}

export default AboutSection