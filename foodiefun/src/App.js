import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';


import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      account: true,

    }
  }

  render(){
    return (
      <div>
        <Route
        exact path ="/newlogin"
        render={}
        />
          
        
      </div>
    )
  }

  

}

export default App;
