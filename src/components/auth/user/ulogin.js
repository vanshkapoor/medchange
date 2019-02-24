import React, { Component } from 'react'
import { Link ,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { loginUser } from '../../../actions/authActions';
//import axios from 'axios';

class ulogin extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
    }
  }

 // componentWillReceiveProps(nextProps){
 //   if(nextProps.auth.isAuthenticated){
 //       this.props.history.push('/dashboard');
 //   }
 //  }

  onChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    });
  } 
  
  onSubmit =(e) =>{
    e.preventDefault();
    const userData = {
      email:this.state.email,
      password:this.state.password,
    }


    this.props.loginUser(userData);

  }


  render() {
    if(this.props.auth.isAuthenticated){
      return <Redirect to= "/udashboard" />;
    }
    return (
      <div>        
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your User account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <p>Don't have an account?<Link to="/join">Back</Link></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

ulogin.propTypes = {
  loginUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToprops = state =>({
  auth:state.auth
})


export default connect(mapStateToprops,{ loginUser })(ulogin);
