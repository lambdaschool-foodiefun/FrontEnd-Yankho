import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import Login from './components /Login /Login';




import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      account: true,

    }
  }

  // Login function 

  handleSignIn = credentials => {
    axios
      .post(
        "https://backend-foodie-fun.herokuapp.com/api/auth/login", 
        crendentials
      )
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.getAllMeals();
      })
      .catch(err => {
        console.log(err);
      });
  }
  // Explain the render

  render(){
    return (
      <div>
        <Route
        exact path = '/'
        render = {props => (
          <Auth
          {...props}
          data = {this.state.data}
          filtered = {this.state.filtered}
          account = {this.state.account}
          handleSignIn = {this.handleSignIn}
          loggedIn = {this.state.loggeIn}
          searchSubmit = {this.searchSubmit}
          

        />
        )}
        />
        <Route
        exact path ="/newlogin"
        render={}
        />
          
        
      </div>
    )
  }

  

}

export default App;
