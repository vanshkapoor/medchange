import React, { Component } from 'react'
import './navbar.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {logout} from '../../actions/authActions';

//import {Link} from 'react-router-dom';




class navbar extends Component {

  static propTypes = {
    auth:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
  }


  render() {

    const { isAuthenticated , user } = this.props.auth;

    const guestlinks = (

        <ul className="navul">
          <li className="navli"><a href="/join">Home</a></li>
          <li className="navli"><a href="/howto">How To</a></li>
          <li className="navli"><a href="/contact">Contact</a></li>
          <li className="navli"><a href="/about">About</a></li>
        </ul>

    );

    const userlinks = (
        <ul className="navul">
        <li className="navli">
          <strong>
            { user ? `welcome ${user.username}`:"" }
          </strong>
        </li>
        
          <li className="navli"><a  href="#home">Dashboard</a></li>
          <li className="navli"><a href="profile">Profile</a></li>
          <li className="navli"><button onClick = {this.props.logout} href="/home">Logout</button></li>

        </ul>
    );

    return (
      <div className="container">
      { isAuthenticated ? userlinks : guestlinks}
      </div>
    )
  }
};
const mapStateToProps =state =>({
  auth:state.auth
})

export default connect(mapStateToProps,{logout})(navbar);