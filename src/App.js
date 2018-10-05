import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Heading from './components/Heading'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Forgot from './components/Forgot'
import NotFound from './components/NotFound'
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD } from './constants/routes'

import './App.css'
import style from './css/landing.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={style.container}>
          <Heading/>
          <div className={style.row}>
            <div className={style.wrapper}>
              <div className="App">
                <Switch>
                  <Redirect path="/" exact to={SIGN_IN}/>
                  <Route path={SIGN_IN} component={SignIn}/>
                  <Route path={SIGN_UP} component={SignUp}/>
                  <Route path={FORGOT_PASSWORD} component={Forgot}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
