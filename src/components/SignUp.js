import React from 'react'

import style from '../css/Sign.css'

const SignUp = props => (
  <div>
    <div className={style.main}>
      <div className={style.loginHead}>Create Account</div>
      <form onSubmit={props.submitMethod}>
        <div className={style.frRow}>
          <div className="col-12">
            <input className={style.fc} type="text" id="fname-input" placeholder="First Name" required />
          </div>
        </div>
        <div className={style.frRow}>
          <div className="col-12">
            <input className={style.fc} type="text" id="lname-input" placeholder="Last Name" required />
          </div>
        </div>
        <div className={style.frRow}>
          <div className="col-12">
            <input className={style.fc} type="email" id="email-input" placeholder="Email" required />
          </div>
        </div>
        <div className={style.frRow}>
          <div className="col-12">
            <input className={style.fc} type="password" id="password-input" placeholder="Password" required />
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
        <div className={style.forgot} onClick={() => props.switch('signIn')}>
          Already have an Account?
        </div>
      </form>
    </div>
  </div>
)

export default SignUp
