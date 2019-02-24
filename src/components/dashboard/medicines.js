import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { getMedicines, deleteMedicine } from '../../actions/medicineActions';



class medicines extends Component {

static propTypes = {
  medicines: PropTypes.array.isRequired,
  getMedicines: PropTypes.func.isRequired,
  deleteMedicine: PropTypes.func.isRequired
};
  
componentDidMount(){
  this.props.getMedicines();
}

  render() {
    return (
      <Fragment>
      <div>
        <h2>Leads</h2>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">credit for medicine</th>
              <th scope="col">Expiry</th>
              <th scope="col">quantity</th>
              
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  medicines:state.medicines
}) 


export default connect(mapStateToProps ,{ getMedicines,deleteMedicine })(medicines);