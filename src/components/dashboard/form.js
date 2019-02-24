import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { addMedicine } from '../../actions/medicineActions';



class form extends Component {
  state ={
    credit:"",
    expiry:"",
    quantity:"",
  };
static propTypes = {
  addMedicine:PropTypes.func.isRequired
}

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value});
  }
  onSubmit =(e) =>{
    e.preventDefault();
    const med = {
      expiry:this.state.expiry,
      credit:this.state.credit,
      quantity:this.state.quantity
    };
    this.props.addMedicine(med);
  }

  render() {
    return (
      <div>
        <div className="card card-body mt-4 mb-4">
          <h2>Add Lead</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Expiry</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.expiry}
              />
            </div>
            <div className="form-group">
              <label>credits</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.credit}
              />
            </div>
            <div className="form-group">
              <label>quantity</label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={this.state.quantity}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null,{ addMedicine})(form);