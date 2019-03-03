import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/chemistauthActions';
//import {acceptchemmedicines,rejectchemMedicine,requests} from '../../actions/chemmedActions';
import {requests} from '../../actions/chemmedActions';

class cdashboard extends Component {

  static propTypes = {
    chemist:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired,
    requests:PropTypes.func.isRequired
  }

  componentDidMount (){
    this.props.requests();
  }

  render() {
    if(!this.props.chemist.isAuthenticated){
      return <Redirect to="/chemist/login" />
    }
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.logout} href = "/chemist/login">logout</button>
        <h1>CHEMIST DASHBOARD</h1>
        <h2>Requests:</h2>

        <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Accept</th>
                        <th scope="col">Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.chemmedicines.chemmeds.request.map(medicine => (
                            <tr key={medicine.id}>
                            <td>{medicine.medicine__name}</td>
                            <td>{medicine.expiryDate}</td>
                            <td>{medicine.creditForMedicine}</td>
                            <td>
                                <button
                                >
                                Delete
                                </button>
                            </td>
                            <td>
                                <button
                                >
                                Request
                                </button>
                            </td>

                            </tr>
                        ))}

                    </tbody>
                    </table>

      </div>
    )
  }
}

const mapStateToProps = state =>({
  chemist:state.chemist,
  chemmedicines:state.chemmedicines  
})

//export default connect(mapStateToProps,{logout,requests,acceptchemmedicines,rejectchemMedicine})(cdashboard);
export default connect(mapStateToProps,{logout,requests})(cdashboard);
