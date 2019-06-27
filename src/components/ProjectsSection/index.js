import React, { Component } from 'react'

import './style.scss'

class ProjectsSection extends Component {
    render() {
        return (
            <div className='projects-section'>
                <h1 className='header'>Projects</h1>
                <div className='projects-list'>
                    <form action="https://play.google.com/store/apps/details?id=com.megamoonmadness.game.android">
                        <button type="submit" className='mightymoon-btn'/>
                    </form>
                    <form action="https://github.com/leonardoho/yelpcamp-website">
                        <button type="submit" className='yelpcamp-btn'/>
                    </form>
                    <form action="https://www.ece.ucdavis.edu/natcar/results/2016-race-results/">
                        <button type="submit" className='natcar-btn'/>
                    </form>
                    <form action="https://github.com/leonardoho/Princeton-Algorithms-I">
                        <button type="submit" className='princeton-btn'/>
                    </form>
                </div>      
            </div>
        )
    }
}

export default ProjectsSection