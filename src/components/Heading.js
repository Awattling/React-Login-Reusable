import React from 'react';
import style from '../css/heading.css';
export class Heading extends React.Component {
    render() {
        return(
            <div>
                {/*<div className={style.row}>
                    <div className={style.logoCont}>
                        <img src={randomLogo}  className={style.logo} alt={"Some Logo"}/>
                    </div>
                </div>*/}
                <div className={style.row}>
                    <div className={style.textTop}>
                        Bhadrak Autonomus Collage
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.textBot}>
                        ~~Physics Society~~
                    </div>
                </div>
            </div>
        )
    }
}