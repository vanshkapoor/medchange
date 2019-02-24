import axios from 'axios';

import {GET_MEDICINES, DELETE_MEDICINE,ADD_MEDICINE} from './types';

//get medicines
export const getMedicines = () => dispatch =>{

    axios.get('/api/medicine/')
        .then(res =>{
            dispatch({
                type:GET_MEDICINES,
                payload:res.data
            });
        }).catch(err => console.log(err));
}; 

//delete
export const deleteMedicine = (id) => dispatch =>{

    axios.delete(`/api/medicine/${id}`)
        .then(res =>{
            dispatch({
                type:DELETE_MEDICINE,
                payload:id
            });
        }).catch(err => console.log(err));
};

//add medicine
export const addMedicine = (med) => dispatch =>{

    axios.post(`/api/medicine/`,med)
        .then(res =>{
            dispatch({
                type:ADD_MEDICINE,
                payload:res.data
            });
        }).catch(err => console.log(err));
};
