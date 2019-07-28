import React from 'react';
import './login.css';
import { Route, Redirect } from 'react-router';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
    };
  }

  onTodoChange(value){
    this.setState({
     email: value,
   });

  }
  onTodoChange2(value){
    this.setState({
     password: value,
   });

  }

  login(){
    let selfProps = this.props
    fetch('http://35.201.2.209/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password,
      })
    })
    .then(function (response) {
      console.log(response);
      if(response.status==200){
        response.text().then((token) => localStorage.setItem('token', token)) 
        selfProps.history.push('/devices')
      }
      else if (response.status==401){
        alert("Wrong Credentials")
      
    }

  })
    .catch(function (error) {
      console.log(error);
    });
  } 

  render() {
    return (

      <div className="log-container">
         <div className="log-container1">
           <div className="header">
                      Login
               </div>
      <div className="logbox">
          <div className="loginput-group">

      <input
      type="text"
      name="email"
      className="login-input"
      placeholder="EMAIL ID"
      onChange={e => this.onTodoChange(e.target.value)}/>
  </div>


      <div className="input-group">

      <input
      type="password"
      name="password"
      className="login-input"
      placeholder="PASSWORD"
      onChange={e => this.onTodoChange2(e.target.value)}/>
      </div>

      <button
      onClick={this.login.bind(this)}
      type="button"
      className="login-btn"
      >Login</button>

      </div>
      </div>
      </div>
      );
    }
  }
  export default Login;
