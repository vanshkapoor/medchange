import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { registerUser } from '../../../actions/authActions';
import { chemregister } from '../../../actions/chemistauthActions';
import Axios from 'axios';



class cregister extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      email:'',
      phoneNumber:'',
      aadhaarNo:'',
      address:'',
      latitude:'',
      longitude:'',
      password:'',
      licenseNumber:''
    }
  };

  onChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  // fileSelectHandler = (e) =>{
  //   this.setState({
  //     licenseOfPharmacist:e.target.files[0]
  //   })
  // }

  onSubmit =(e) =>{
    e.preventDefault();

    var lat ;
    var lng ;

    const {address} = this.state;
    console.log(address);
    geocode();


    function geocode(){

      Axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:address,
          key:'AIzaSyAUFluV6yZxenNs_aXCGwXq3N1Wqv7M0uo'
        }
      }).then(function(response){
        console.log(response);
         lat = response.data.results[0].geometry.location.lat;
         lng = response.data.results[0].geometry.location.lng;
         lat = lat + "";
         lng = lng + "";
         console.log(lat + 5);
      }).catch(function(error){
        console.log(error);
      });
    }
        
        const newchemuser = {
          username:this.state.username,
          email:this.state.email,
          phoneNumber:this.state.phoneNumber,
          aadhaarNo:this.state.aadhaarNo,
          address:address,
          latitude:lat,
          longitude:lng,
          password:this.state.password,
          licenseNumber:this.state.licenseNumber
        };

        console.log(newchemuser);
        this.props.chemregister(newchemuser);    
  }



  render() {

    if(this.props.chemist.isAuthenticated){
      return <Redirect  to="/chemist/dashboard"/>
    }

    return (
      <div>
        <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your chemist account</p>
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
                      <input type="text" className='form-control form-control-lg'
                       placeholder=" license No" name="licenseNumber" value ={this.state.licenseNumber} onChange={this.onChange}/>
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

const mapStateToProps = state =>({
  chemist:state.chemist
});


export default connect(mapStateToProps,{chemregister})(cregister);