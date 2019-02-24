import React,{ Fragment ,Component} from 'react';
import { Redirect } from "react-router-dom";
import Form from './form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { getMedicines, deleteMedicine } from '../../actions/medicineActions';


class dashboard extends Component{

    
static propTypes = {
    medicines: PropTypes.array.isRequired,
    getMedicines: PropTypes.func.isRequired,
    deleteMedicine: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
};

  
componentDidMount(){
    this.props.getMedicines();
}


 render(){
    if(!this.props.auth.isAuthenticated){
        return <Redirect to= "/ulogin" />;
      }
        return(
            <div>
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
                        
                        {this.props.medicines.map(medicine => (
                            <tr key={medicine.id}>
                            <td>{medicine.creditForMedicine}</td>
                            <td>{medicine.expiryDate}</td>
                            <td>{medicine.quantityOfMedicine}</td>
                            <td>
                                <button
                                onClick={this.props.deleteMedicine.bind(this, medicine.id)}
                                className="btn btn-danger btn-sm"
                                >
                                {" "}
                                Delete
                                </button>
                            </td>
                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div>
                </Fragment>
            </div>
    )
}
}



const mapStateToProps = state => ({
    medicines:state.medicines.medicines,
    auth:state.auth
  }) 
  

export default connect(mapStateToProps ,{ getMedicines,deleteMedicine })(dashboard);
