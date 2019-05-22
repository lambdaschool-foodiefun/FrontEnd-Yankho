import React from 'react';


export default class NewLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }


    newUser = event => {
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.handleSignUP(newUser);
        this.props.history.push('/');
    };

    //This pushes the new users to a new history of logins and become authenticated



    render(){
        console.log(this.props);
        return(
            <div>
                <div>
                    <h1>Register</h1>
                    <form onSubmit = {this.newUser} className="post-form">
                    <input
                        placeholder = 'Usernanem'
                        name = 'username'
                        value = {this.state.usename}
                        onChange = {}
                        />
                    <input 
                        placholder = "Password"
                        name = "password"
                        value = {this.state.password}
                        onChange = {}
                        type = "password"
                        />
                        <button className ="btn">Register </button>
                    </form>
                </div>
            </div>
        )
    }
}