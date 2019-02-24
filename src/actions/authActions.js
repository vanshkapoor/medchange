import { TEST_DISPATCH,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,
        USER_LOADING,AUTH_ERROR,LOGOUT_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS } 
        from './types';
import axios from 'axios';
//import setAuthToken from '../utils/setAuthToken';



//Register user
//export const registerUser = (userdata,history)=> {
 //
//    axios.post('/api/auth/register',userdata)
//    .then(res => history.push('/ulogin'))
//    .catch(err => console.log(err));
//     return{
 //       type: TEST_DISPATCH,
//        payload:userdata
//        };

// };



//login user
export const loginUser = userdata => dispatch =>{
    
    //axios.post('/api/auth/login',userdata)
   // .then(res =>{
    //    dispatch({
    //        type:LOGIN_SUCCESS,
    //        payload:res.data
    //    })            
   // })
   // .catch(err => console.log(err))



   //headers
   const config = {
       headers:{
           'Content-Type' : 'application/json'
       }
   }

   axios.post('/api/auth/login',userdata,config)
   .then(res =>{
       dispatch({
           type:LOGIN_SUCCESS,
           payload:res.data
       });
   }).catch(err => {
       console.log(err);
       dispatch({
           type:LOGIN_FAIL
       })
   })
};



export const loadUser = () =>(dispatch, getState ) =>{
    dispatch({type:USER_LOADING });

    //gets token from state
    const token = getState().auth.token;

    //headers
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }

    //if token -> add to headers
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user',config)
    .then(res =>{
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type:AUTH_ERROR
        })
    })

};

//logout
export const logout = () =>( dispatch, getState) =>{

    //gets token from state
    const token = getState().auth.token;

    //headers
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }

    //if token -> add to headers
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.post('/api/auth/logout',null,config)
    .then(res =>{
        dispatch({
            type:LOGOUT_SUCCESS,
        });
    }).catch(err => {
        console.log(err);
    })
};

export const register = (userdata) => (dispatch) => {

    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }
 
    axios.post('/api/auth/register',userdata,config)
    .then(res =>{
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type:REGISTER_FAIL
        })
    })

};




