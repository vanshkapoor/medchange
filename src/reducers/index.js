import { combineReducers } from 'redux';
import authReducer from './authReducer';
import medicineReducer from './medicineReducer';
import chemistauthReducer from './chemauthReducer';
import chemmedReducer from './chemmedReducer';

export default combineReducers({
    auth:authReducer,
    medicines:medicineReducer,
    chemist:chemistauthReducer,
    chemmedicines:chemmedReducer
});
