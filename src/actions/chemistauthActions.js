import { CHEMREGISTER_SUCCESS,CHEMREGISTER_FAIL,
    CHEMUSER_LOADED, 
    CHEMUSER_LOADING,
    CHEMAUTH_ERROR,
    CHEMLOGIN_SUCCESS,
    CHEMLOGIN_FAIL,
    CHEMLOGOUT_SUCCESS,
}
   from './types';
import axios from 'axios';


export const chemlogin = chemdata => dispatch =>{
     //headers
   const config = {
    headers:{
        'Content-Type' : 'application/json'
    }
}

axios.post('http://206.189.133.177/api/auth/pharmacist/login',chemdata,config)
.then(res =>{
    dispatch({
        type:CHEMLOGIN_SUCCESS,
        payload:res.data
    });
}).catch(err => {
    console.log(err);
    dispatch({
        type:CHEMLOGIN_FAIL
    })
})
};





export const logout =() =>(dispatch, getState) =>{
    const token = getState().chemist.token;
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.post('http://206.189.133.177/api/auth/logout',null,config)
    .then(res =>{
        dispatch({
            type:CHEMLOGOUT_SUCCESS,
        });
    }).catch(err => {
        console.log(err);
    })

};





export const chemregister = (chemuserdata) => (dispatch) =>{
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }

    axios.post('http://206.189.133.177/api/auth/pharmacist/register',chemuserdata,config)
    .then(res => {
        console.log(res);
        dispatch({
            type:CHEMREGISTER_SUCCESS,
            payload:res.data
        });
    }).catch(err =>{
        console.log(err);
        dispatch({
            type:CHEMREGISTER_FAIL,
        })
    })
};






export const loadchemuser = () =>(dispatch,getState) =>{
    dispatch({type:CHEMUSER_LOADING});

    const token = getState().chemist.token;

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('http://206.189.133.177/api/auth/pharmacist',config)
    .then(res =>{
        dispatch({
            type:CHEMUSER_LOADED,
            payload:res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type:CHEMAUTH_ERROR
        })
    })
};


