import React from 'react'

import style from '../css/Sign.css'

const Forgot = ({ switch: switchComponent, submitMethod }) => (
  <div>
    <div className={style.main}>
      <div className={style.loginHead}>Recover Password</div>
      <form onSubmit={submitMethod}>
        <div className={style.frRow}>
          <div className="col-12">
            <input className={style.fc} type="email" id="email-input" placeholder="Email" required />
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
            <input className={style.fc} type="password" id="password-input" placeholder="New Password" required />
          </div>
        </div>
        <div className={style.btnRow}>
          <button type="submit" className={style.btn}>
            {' '}
            Confirm
          </button>
        </div>
        <div className={style.forgot} onClick={() => switchComponent('signIn')}>
          Back
        </div>
      </form>
    </div>
  </div>
)

export default Forgot
