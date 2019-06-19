import React, { Component } from 'react'

import './style.scss'

class CareerSection extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Finisar',
            text1: "Co-designed the industry's first 50GBASE-SR SFP56 optical transceiver that can operate at three different data rates",
            text2: 'Developed a semi-automated platform to characterize and optimize module performance, such as bit error rate and eye quality, by establishing a tuning algorithm and integrating different test cases',
            text3: 'Built Python test scripts to evaluate individual modules inside a transceiver by adjusting the control registers',
            text4: 'Cooperated with different teams to integrate all the module functions and to establish a roadmap for production level ramp of next generation PAM4 transceiver modules'
        }

    }

    onFinisarButton() {
        this.setState({
            name: 'Finisar',
            text1: "Co-designed the industry's first 50GBASE-SR SFP56 optical transceiver that can operate at three different data rates",
            text2: 'Developed a semi-automated platform to characterize and optimize module performance, such as bit error rate and eye quality, by establishing a tuning algorithm and integrating different test cases',
            text3: 'Built Python test scripts to evaluate individual modules inside a transceiver by adjusting the control registers',
            text4: 'Cooperated with different teams to integrate all the module functions and to establish a roadmap for production level ramp of next generation PAM4 transceiver modules'
        });
    }

    onNexleafButton() {
        this.setState({
            name: 'Nexleaf',
            text1: 'Implemented and executed exploratory tests in order to ensure the robustness of cloud-based temperature sensors, the accuracy of data analytics tools, and the quality of wireless data transmission in real time',
            text2: 'Debugged firmware and device features and managed the QA/QC process of software/hardware releases',
            text3: 'Coordinated with the CTO to monitor the development process and provide comprehensive analysis to developers',
            text4: ''
        });
    }

    onUCLAButton() {
        this.setState({
            name: 'UCLA Tech Camp',
            text1: 'Created an audio amplifier project and authored curriculum modules for Dean’s Outreach Program',
            text2: 'Developed and delivered workshops in circuitry and programming for further advancement of research designs',
            text3: 'Managed lab space and mentored 16 students over 2 four-week sessions on electrical engineering concepts',
            text4: ''
        });
    }

    render() {
        return (
            <div className='career-section'>
                <h1 className='header'>Career</h1>
                <ul className='buttons'>
                    <button onClick={this.onFinisarButton.bind(this)} className='finisar-btn'>Finisar</button>
                    <button onClick={this.onNexleafButton.bind(this)} className='nexleaf-btn'>Nexleaf</button>
                    <button onClick={this.onUCLAButton.bind(this)} className='ucla-btn'>UCLA</button> 
                </ul>
                <div className='career-description'>
                    <div className='company-name'>
                        {this.state.name}
                    </div>
                    <div className='description'>
                        <ul>
                            <li>{this.state.text1}</li>
                            <li>{this.state.text2}</li>
                            <li>{this.state.text3}</li>
                            <li>{this.state.text4}</li>
                        </ul>
                    </div>
                </div> 
                <link href="https://fonts.googleapis.com/css?family=Archivo&display=swap" rel="stylesheet"></link>         
            </div>
        )
    }
}

export default CareerSection