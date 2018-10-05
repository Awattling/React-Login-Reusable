import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { SIGN_UP, FORGOT_PASSWORD } from '../constants/routes'
import style from '../css/Sign.css'

export default class SignIn extends PureComponent {
  login = event => {
    /* TODO Input checking and logging in new user */
    /* TODO Navigation to home page */

    event.preventDefault()
    alert('Successfully Logged in')
  }

  render() {
    return (
      <div>
        <div className={style.main}>
          <div className={style.loginHead}>Login</div>
          <form onSubmit={this.login}>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="email"
                       id="email-input" placeholder="Email"
                       required/>
              </div>
            </div>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="password"
                       id="password-input" placeholder="Password"
                       required/>
              </div>
            </div>
            <div className={style.fcRow}>
              <label className="form-check-label">
                <input type="checkbox"
                       className="form-check-input"/>
                Remember me
              </label>
            </div>
            <div className={style.btnRow}>
              <button type="submit" className={style.btn}>
                {' '}
                Enter
              </button>
            </div>
            <Link className={style.forgot} to={FORGOT_PASSWORD}>Forgot your password?</Link>
          </form>
        </div>
        <Link className={style.create} to={SIGN_UP}>Create an Account</Link>
      </div>
    )
  }
}
