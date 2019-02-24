import React, { Component } from 'react'
//import axios from 'axios';
import { withRouter,Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { registerUser } from '../../../actions/authActions';
import { register } from '../../../actions/authActions';
import PropTypes from 'prop-types';



class uregister extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      email:'',
      phoneNumber:'',
      aadhaarNo:'',
      address:'',
      password:'',
    }
  };

  static propTypes = {
    register : PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  };

  onChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit =(e) =>{
    e.preventDefault();
    const newuser = {
      username:this.state.username,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      aadhaarNo:this.state.aadhaarNo,
      address:this.state.address,
      password:this.state.password,
    };

    this.props.register(newuser,this.props.history);
    //axios.post('/api/auth/register',newuser)
    //.then(res => console.log(res.data))
    //.catch(err => console.log(err));

    console.log(newuser);
  }


  render() {
    
    if(this.props.auth.isAuthenticated){
      return <Redirect to="/udashboard" />
    }

    return (
      <div>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your User account</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className='form-control form-control-lg'                  
                       placeholder="Name" name="username" value={this.state.username} onChange={this.onChange} required/>                      
                    </div>
                    
                    <div className="form-group">
                      <input type="email" className='form-control form-control-lg'                        
                       placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} required/>                      
                    </div>

                    <div className="form-group">
                      <input type="text" className='form-control form-control-lg'                        
                       placeholder="phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} required/>                      
                    </div>
                    
                    <div className="form-group">
                      <input type="text" className='form-control form-control-lg' 
                      placeholder="Aadhar Number" name="aadhaarNo" value={this.state.aadhaarNo} onChange={this.onChange} required/>
                    </div>
                    
                    <div className="form-group">
                      <input type="text" className='form-control form-control-lg'
                       placeholder="Address" name="address" value={this.state.address} onChange={this.onChange} required/>
                    </div>


                    <div className="form-group">
                      <input type="password" className='form-control form-control-lg'                        
                       placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required/>
                    </div>
                    
                    
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                    <p>Already have an account?<Link to="/join">back</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  auth:state.auth
});

export default connect(mapStateToProps, {register})(withRouter(uregister));