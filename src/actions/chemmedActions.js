import axios from 'axios';
import {REQUESTS_SUCCESS} from './types';



//LOADS THE USERS ON THE PHARMACISTS THAT CONNECTED  HIM FOR A MEDICINE
export const requests = () =>(dispatch,getState) =>{

    
    const token = getState().chemist.token;
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }


    axios.get('http://206.189.133.177/api/request',config)
    .then(res =>{
        dispatch({
            type:REQUESTS_SUCCESS,
            payload:res.data
        })
    }).catch(err => console.log(err));

};


// export const acceptchemmedicines =() =>() =>{

// };

// export const rejectchemmedicines =() =>()=>{

// };