import React,{ Component} from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { getMedicines, deleteMedicine ,requestmedicines} from '../../actions/medicineActions';


class dashboard extends Component{

    
static propTypes = {
    medicines: PropTypes.object.isRequired,
    getMedicines: PropTypes.func.isRequired,
    deleteMedicine: PropTypes.func.isRequired,
    requestmedicines:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
};

  
componentDidMount(){
    this.props.getMedicines();
    console.log(this.props.medicines);
}


 render(){
    if(!this.props.auth.isAuthenticated){
        return <Redirect to= "/ulogin" />;
      }
        return(
                <div>
                    <h2>MEDICINES</h2>
                    <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">credit for medicine</th>
                        <th scope="col">Expiry</th>
                        <th scope="col">quantity</th>
                        <th scope="col">delete </th>
                        <th scope="col">request</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.medicines.medicines.map(medicine => (
                            <tr key={medicine.id}>
                            <td>{medicine.id}</td>
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
                            <td>
                                <button
                                onClick={this.props.requestmedicines.bind(this, medicine.id)}
                                className="btn btn-success btn-sm"
                                >
                                {" "}
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



const mapStateToProps = state => ({
    medicines:state.medicines,
    auth:state.auth
  }) 
  

export default connect(mapStateToProps ,{ getMedicines,deleteMedicine,requestmedicines })(dashboard);
