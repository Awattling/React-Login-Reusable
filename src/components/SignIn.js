import React from 'react'

import style from '../css/Sign.css'

const SignIn = ({ switch: switchComponent, submitMethod }) => (
  <div>
    <div className={style.main}>
      <div className={style.loginHead}>Login</div>
      <form onSubmit={submitMethod}>
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
        <div className={style.fcRow}>
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" />
            Remember me
          </label>
        </div>
        <div className={style.btnRow}>
          <button type="submit" className={style.btn}>
            {' '}
            Enter
          </button>
        </div>
        <div className={style.forgot} onClick={() => switchComponent('forgot')}>
          Forgot your password?
        </div>
      </form>
    </div>
    <div className={style.create} onClick={() => switchComponent('signUp')}>
      Create an Account
    </div>
  </div>
)

export default SignIn
