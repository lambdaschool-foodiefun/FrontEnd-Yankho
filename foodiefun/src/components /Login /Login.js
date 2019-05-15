import React from "react";


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login = e => {
        e.preventDefault();
        this.props.handleSignIn(this.state);
        this.props.login();
    };

    handleChanges = e => {
        this.setState({ [e.target.value]: e.target.value })
    }

    render(){
        return(
            <div>
                <div>
                    <h1 className="form-heading">Log In</h1>
                    <form onSubmit={this.login} className='login post-form'>
                        <input
                        className = 'addPost'
                        placeholder = 'Username'
                        name = 'username'
                        value={this.state.username}
                        onChange = {this.handleChanges}
                        />
                        <input 
                        className = 'addPost'
                        placeholder = 'Password'
                        name = 'password'
                        value = {this.state.password}
                        onChange = {this.handleChanges}
                        />
                    </form>
                    <Link
                    className = 'new'
                    to = {{
                        pathname: '/newLogin'
                    }}
                    >
                    Are you a new user?
                    </Link>
                </div>
            </div>
        )
    }



}