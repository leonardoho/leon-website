import React, { Component } from 'react'

import './style.scss'

class ProjectsSection extends Component {
    render() {
        return (
            <div className='projects-section'>
                <h1 className='header'>Projects</h1>
                <div className='projects-list'>
                    <button className='mightymoon-btn'></button>
                    <button className='yelpcamp-btn'></button>
                    <button className='natcar-btn'></button>
                    <button className='princeton-btn'></button>
                </div>
                <link href="https://fonts.googleapis.com/css?family=Archivo&display=swap" rel="stylesheet"></link>         
            </div>
        )
    }
}

export default ProjectsSection