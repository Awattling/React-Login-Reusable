import React from 'react';
import style from '../css/landing.css';
import {Heading} from './Heading';
import {SignUp} from './SignUp';
import {SignIn} from "./SignIn";
import {Forgot} from "./Forgot";

export class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: "signIn",
        };
        this.createNewUser = this.createNewUser.bind(this);
        this.login = this.login.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.resetUser = this.resetUser.bind(this);
    }

    changePosition(position){
        this.setState({
            position: position,
        })
    }

    createNewUser(event){
        /* TODO Input checking and creating new user */
        /* TODO Navigation to home page */
        event.preventDefault();
        alert("New User Created");
    }

    login(event){
        /* TODO Input checking and logging in new user */
        /* TODO Navigation to home page */
        event.preventDefault();
        alert("Successfully Logged in");
    }

    resetUser(event){
        /*TODO Input checking and verifying user */
        /*TODO Navigation to login page*/
        event.preventDefault();
        alert("Reset User")
    }

    render() {
        let comp;
        if(this.state.position === "signUp"){
            comp = <SignUp submitMethod={this.createNewUser} switch={this.changePosition}/>
        }else if(this.state.position === "signIn"){
            comp = <SignIn submitMethod ={this.login} switch={this.changePosition}/>
        }else if(this.state.position === "forgot"){
            comp = <Forgot submitMethod ={this.resetUser}/>
        }
        return(
            <div className={style.container}>
                <Heading/>
                <div className={style.row}>
                    <div className={style.wrapper}>
                        {comp}
                    </div>
                </div>
            </div>
        )
    }
}