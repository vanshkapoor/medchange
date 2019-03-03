import axios from 'axios';

import {GET_MEDICINES, DELETE_MEDICINE} from './types';


// const tokenConfig = getState => {

//     const token = getState().auth.token;
  
//     const config = {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };
  
//     if (token) {
//       config.headers["Authorization"] = `Token ${token}`;
//     }
  
//     return config;
//   };



//get medicines
export const getMedicines = () => (dispatch,getState) =>{

//dispatch({type:MEDICINE_LOADING});

    const token = getState().auth.token;

    const config = {
        headers:{
        "Content-Type": "application/json"
        }
    };
    
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    axios.get('http://206.189.133.177/api/medicineofuser', config)
        .then(res =>{
            dispatch({
                type:GET_MEDICINES,
                payload:res.data
            });
            
        }).catch(err => console.log(err));
}; 



//delete
export const deleteMedicine = (id) => (dispatch,getState) =>{


    const token = getState().auth.token;

    const config = {
        headers:{
        "Content-Type": "application/json"
        }
    };
    
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }


    axios.delete(`http://206.189.133.177/api/medicineofuser/${id}`,config)
        .then(res =>{
            dispatch({
                type:DELETE_MEDICINE,
                payload:id
            });
        }).catch(err => console.log(err));
};

//add medicine
// export const addMedicine = (med) => (dispatch,getState) =>{

//     axios.post(`/api/medicineofuser/`,med,tokenConfig(getState))
//         .then(res =>{
//             dispatch({
//                 type:ADD_MEDICINE,
//                 payload:res.data
//             });
//         }).catch(err => console.log(err));
// };





//FUTURE POSSIBILITY OF ADDING REQUESTS THROUGH WEB APP

export const requestmedicines = (id) =>(dispatch,getState) =>{
    const token = getState().auth.token;

    const config = {
        headers:{
        "Content-Type": "application/json"
        }
    };
    
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    const isRequested = true;
    axios.patch(`http://206.189.133.177/api/medicineofuser/${id}`,config,isRequested)
    .then(res => console.log(res)
    ).catch(err => console.log(err));  

}
