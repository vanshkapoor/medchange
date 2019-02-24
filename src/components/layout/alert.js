import React, { Component,Fragment } from 'react'
import {withAlert} from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




class alert extends Component {

static propTypes = {
  error:PropTypes.object.isRequired
}

componentDidMount(){
      this.props.alert.show('it works');
}

  render() {
    return (
        <Fragment/>
    )
  }
}


export default connect()(withAlert(alert));