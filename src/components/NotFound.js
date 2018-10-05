import React from 'react'
import { Link } from 'react-router-dom'

import { SIGN_IN, SIGN_UP } from '../constants/routes'
import style from '../css/Sign.css'

const NotFound = () => (
  <div>
    <div className={style.main}>
      <h1>404 Error</h1>
      <Link to={SIGN_IN}>Sign In</Link> or
      <Link to={SIGN_UP}>Create an Account</Link>
    </div>
  </div>
)

export default NotFound
