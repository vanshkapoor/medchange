import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class profile extends Component {
    
  static propTypes = {
    auth:PropTypes.object.isRequired,
  }


  render() {
    
    const { token ,user} = this.props.auth;

    const display = (
        <div>
            <h1>Name : {user.username}</h1>
            <h2>email : {user.email}</h2>
            <h2>phone number : {user.phoneNumber}</h2>
            <h2>aadhaar number : {user.aadhaarNo}</h2>
            <h2>Credits : {user.totalCredits}</h2>
            <h1>GET CREDITS</h1>
        </div>
    );

    return (
      <div className="container">
          <h1>Profile</h1>
          { token ? display : " "}
                    
      </div>
    )
  }
};


const mapStateToProps =state =>({
    auth:state.auth
});
  
export default connect(mapStateToProps)(profile);