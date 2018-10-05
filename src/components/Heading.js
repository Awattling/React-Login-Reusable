import React from 'react'

import style from '../css/heading.css'

const Heading = () => (
  <div>
    {/*<div className={style.row}>
                    <div className={style.logoCont}>
                        <img src={randomLogo}  className={style.logo} alt={"Some Logo"}/>
                    </div>
                </div>*/}
    <div className={style.row}>
      <div className={style.textTop}>Generic Name</div>
    </div>
    <div className={style.row}>
      <div className={style.textBot}>Generic sub heading</div>
    </div>
  </div>
)

export default Heading
