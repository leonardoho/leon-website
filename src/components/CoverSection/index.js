import React, { Component } from 'react'

import './style.scss'

class CoverSection extends Component {
    render() {
        return (
            <div className='cover-section'>
                <div className='background-image'></div>
                <div className='content'>
                    <div className='main-text'>
                        <h1 className='first-name'>Leon</h1>
                        <h1 className='last-name'>Ho</h1>
                        <h2 className='description'>Aspiring software engineer</h2>
                    </div>
                    <div className='profile-pic'>
                        <img className='photo' src={require('../../../public/profile_square.jpg')}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default CoverSection