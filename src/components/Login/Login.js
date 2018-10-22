import React, { Component } from 'react';

import Username from '../Username/Username'
import Password from '../Password/Password';
import Button from '../Button/Button';
import './Login.css'
import Home from '../Home/Home';


class Login extends Component {
    
   getNameHandler = () => {
       let name = document.getElementById('username');
       return name.value
   }
  state = {
      login: false
  }
  onLoginHandler = () => {
      this.setState({
          login: true
      })
  }
  render() {
        return (
            <div>
                {this.state.login ? <div className="container"><Home /></div>
                :
                <div className="container">    
                    <h1> Login</h1>
                    <form>
                    <Username />
                    <br />
                    <Password />
                    <br />
                    <Button click={this.onLoginHandler}> Login </Button>
                    </form>
                </div> 
                }  
            </div>
        );
    }
}

export default Login;