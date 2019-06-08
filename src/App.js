import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Root, Routes, Switch } from 'react-static'
import { Router, Link } from '@reach/router'
import { ParallaxProvider } from 'react-scroll-parallax';

//
import Dynamic from 'containers/Dynamic'

import './app.css'
import HomePage from './components/HomePage'

class App extends Component {
  
  render() {
    return (
      <Root>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="/" component={HomePage}/>
          </Router>
        </React.Suspense>
      </Root>
    )
  }
}

export default hot(module)(App)