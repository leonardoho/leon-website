import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import CoverSection from '../CoverSection'
import ProjectsSection from '../ProjectsSection'
import CareerSection from '../CareerSection';
import AboutSection from '../AboutSection';

import './style.scss'

class HomePage extends Component {
    render() {
        return (

            <ReactFullpage
            debug /* Debug logging */
            render={comp => (
                <ReactFullpage.Wrapper>
                    <div className="Home">
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
                    </div>
                </ReactFullpage.Wrapper>
            )}
          />
        )
    }
}

export default HomePage