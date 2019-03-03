import React, { Component } from 'react'
import uimage from '../img/user.png';
import pimage from '../img/pharmacist.png';
import himage from '../img/hospital.png';

import './join.css';

class join extends Component {
  render() {

    return (
      <div>
          <div className="userbox">
            <img src={uimage} alt="user"/>
            <a className="btn btn-lg btn-info" href="/ulogin">LOGIN</a>
            <a className ="btn btn-lg btn-info" href="/uregister">REGISTER</a>
          </div>
          
          <div className="userbox">
          <img src={pimage} alt="chemist" />
          <a className="btn btn-lg btn-info" href="/chemist/login">LOGIN</a>
          <a className ="btn btn-lg btn-info" href="/chemist/register">REGISTER</a>
          </div>

          <div className="userbox" >
          <img src={himage} alt="hospital"/>
            
          </div>
        
      </div>
    )
  }
}

export default join;