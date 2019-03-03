import React, { Component } from 'react'
import './navbar.css';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {logout} from '../../actions/chemistauthActions';

//import {Link} from 'react-router-dom';




class navbarchemist extends Component {

  static propTypes = {
    chemist:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
  }


  render() {

    const { isAuthenticated } = this.props.chemist;
    const user = this.props.chemist.chemuser;

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
          
          <li className="navli"><button onClick = {this.props.logout} href="/chemist/login">Logout</button></li>      
          <li className="navli"><a  href="/chemist/dashboard">Dashboard</a></li>
          <li className="navli"><a href="/profile">Profile</a></li>
          <li className="navli">
          <strong>
            { user ? `welcome ${user}` :"" }
          </strong>
        </li>
        
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
  chemist:state.chemist
})

export default connect(mapStateToProps,{logout})(navbarchemist);