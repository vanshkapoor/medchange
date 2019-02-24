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
            <img src={uimage} />
            <a className="btn btn-lg btn-info" href="/ulogin">LOGIN</a>
            <a className ="btn btn-lg btn-info" href="/uregister">REGISTER</a>

          </div>
          <div className="userbox">
          <img src={pimage} />
            <a></a>
            <a></a>

          </div>
          <div className="userbox">
          <img src={himage} />
            <a></a>
            <a></a>

          </div>
        
      </div>
    )
  }
}

export default join;