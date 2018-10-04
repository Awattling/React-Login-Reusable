import React from 'react';
import style from '../css/Sign.css';
export class SignIn extends React.Component {
    render() {
        return(
            <div>
                <div className={style.main}>
                    <div className={style.loginHead}>
                        Login
                    </div>
                    <form onSubmit={this.props.submitMethod}>
                        <div className={style.frRow}>
                            <div className="col-12">
                                <input className={style.fc} type="email" id="email-input" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className={style.frRow}>
                            <div className="col-12">
                                <input className={style.fc} type="password" id="password-input" placeholder="Password" required/>
                            </div>
                        </div>
                        <div className={style.fcRow}>
                          <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"/>
                                Remember me
                          </label>
                        </div>
                        <div className={style.btnRow}>
                            <button type="submit" className={style.btn}> Enter</button>
                        </div>
                        <div className={style.forgot} onClick={() => this.props.switch("forgot")}>
                            Forgot your password?
                        </div>
                    </form>
                </div>
                <div className={style.create} onClick={() => this.props.switch("signUp")}>
                    Create an Account
                </div>
            </div>
        )
    }
}