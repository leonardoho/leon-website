import React, { Component } from 'react'

import './style.scss'


class ContactSection extends Component {
    render() {
        return (
            <div className='contact-section'>
                <h1 className='header'>Get In Touch!</h1>
                <div className='icon'>
                    <img className='email-btn' src={require('../../../public/social-2.png')}/>
                    <form action="https://github.com/leonardoho">
                        <button type="submit" className='github-btn'/>
                    </form>
                    <form action="https://www.linkedin.com/in/leon-ho-7272b3a7/">
                        <button type="submit" className='linkedin-btn'/>
                    </form>
                </div>
                <div className='contact-description'>
                    <h2>Leon Ho</h2>
                    <h2>leon2013@g.ucla.edu</h2>
                    <h2>leonardoho</h2>
                </div> 
            </div>
        )
    }
}

export default ContactSection