import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import CoverSection from '../CoverSection'
import ProjectsSection from '../ProjectsSection'
import CareerSection from '../CareerSection';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';

import './style.scss'

class HomePage extends Component {
    render() {
        return (

            <ReactFullpage
            debug /* Debug logging */
            navigation
            render={comp => (
                <ReactFullpage.Wrapper>
                    <div className="home">
                        <div className='background-image'></div>
                        <div className='content'>
                            <div className="section">
                                <CoverSection/>
                            </div>
                            <div className="section">
                                <AboutSection/>
                            </div>
                            <div className="section">
                                <CareerSection/>
                            </div>
                            <div className="section">
                                <ProjectsSection/>
                            </div>
                            <div className="section">
                                <ContactSection/>
                            </div>
                        </div>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
                        </style>
                    </div>
                </ReactFullpage.Wrapper>
            )}
          />
        )
    }
}

export default HomePage