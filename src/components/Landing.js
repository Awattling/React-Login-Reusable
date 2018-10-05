import React from 'react'

import style from '../css/landing.css'

import Heading from './Heading'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Forgot from './Forgot'

export class Landing extends React.Component {
  state = {
    position: 'signIn',
  }

  changePosition = position => this.setState({ position })

  createNewUser = event => {
    /* TODO Input checking and creating new user */
    /* TODO Navigation to home page */

    event.preventDefault()
    alert('New User Created')
  }

  login = event => {
    /* TODO Input checking and logging in new user */
    /* TODO Navigation to home page */

    event.preventDefault()
    alert('Successfully Logged in')
  }

  resetUser = event => {
    /*TODO Input checking and verifying user */
    /*TODO Navigation to login page*/

    event.preventDefault()
    alert('Reset User')
  }

  selectComponent = () => {
    const { position } = this.state

    if (position === 'signUp') return <SignUp submitMethod={this.createNewUser} switch={this.changePosition} />
    if (position === 'signIn') return <SignIn submitMethod={this.login} switch={this.changePosition} />
    if (position === 'forgot') return <Forgot submitMethod={this.resetUser} switch={this.changePosition} />
  }

  render() {
    return (
      <div className={style.container}>
        <Heading />
        <div className={style.row}>
          <div className={style.wrapper}>{this.selectComponent()}</div>
        </div>
      </div>
    )
  }
}
