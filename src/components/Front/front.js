import React, { Component } from 'react'
import './front.css';

class front extends Component {
  render() {
    return (
      <div>
            <div className="head">
                <h1>MEDICHANGE</h1>
                <p className="head2">Sell unused medicines<br/>Increase your income<br/>and customer base.</p>
                <p>Medichange is a platform that joins pharmacists and customers<br/>together with the aim of
                reducing medicine wastage.</p>
            </div>

            <div className="Mbutton">
                <a href="/join">JOIN TODAY</a>
            </div>
        
      </div>
    )
  }
}

export default front;