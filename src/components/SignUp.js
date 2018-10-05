import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { SIGN_IN } from "../constants/routes";
import style from '../css/Sign.css'

export default class SignUp extends PureComponent {
  createNewUser = event => {
    /* TODO Input checking and creating new user */
    /* TODO Navigation to home page */

    event.preventDefault()
    alert('New User Created')
  }

  render() {
    return (
      <div>
        <div className={style.main}>
          <div className={style.loginHead}>Create Account</div>
          <form onSubmit={this.createNewUser}>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="text" id="fname-input"
                       placeholder="First Name" required/>
              </div>
            </div>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="text" id="lname-input"
                       placeholder="Last Name" required/>
              </div>
            </div>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="email" id="email-input"
                       placeholder="Email" required/>
              </div>
            </div>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="password" id="password-input"
                       placeholder="Password" required/>
              </div>
            </div>
            <div className={style.frRow}>
              <div className="col-12">
                <input
                  className={style.fc}
                  type="password"
                  id="conf-password-input"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <div className={style.btnRow}>
              <button type="submit" className={style.btn}>
                {' '}
                Confirm
              </button>
            </div>
            <Link className={style.forgot} to={SIGN_IN}>Already have an Account?</Link>
          </form>
        </div>
      </div>
    )
  }
}