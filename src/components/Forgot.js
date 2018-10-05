import React, { PureComponent } from 'react'

import style from '../css/Sign.css'

export default class SignIn extends PureComponent {
  resetUser = event => {
    /*TODO Input checking and verifying user */
    /*TODO Navigation to login page*/

    event.preventDefault()
    alert('Reset User')
  }

  render() {
    return (
      <div>
        <div className={style.main}>
          <div className={style.loginHead}>Recover Password</div>
          <form onSubmit={this.resetUser}>
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="email" id="email-input"
                       placeholder="Email" required/>
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
            <div className={style.frRow}>
              <div className="col-12">
                <input className={style.fc} type="password" id="password-input"
                       placeholder="New Password" required/>
              </div>
            </div>
            <div className={style.btnRow}>
              <button type="submit" className={style.btn}>
                {' '}
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}