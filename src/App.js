import React, { Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
import {loadchemuser} from './actions/chemistauthActions';

//components
//import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from './components/layout/navbar'; 
import HowTo from './components/HowTo';
import front from './components/Front/front';
import join  from './components/join';

//user routes
import ulogin from './components/auth/user/ulogin';
import uregister from './components/auth/user/uregister';
import Udashboard from './components/dashboard/dashboard';
import profile from './components/dashboard/profile';

//chemist routes
import clogin from './components/auth/chemist/clogin';
import cregister from './components/auth/chemist/cregister';
import cdashboard from './components/chemist/cdashboard';


//import Alert from './components/layout/alert';

//alerts



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(loadchemuser());
  }
  
  render() {
    return ( 
      <Provider store={ store }>
        <Router>
          <div>
          <div className="App" >
            <Navbar/>
            <Route exact path="/" component={ front } ></Route>
            <Route exact path='/join' component={join}></Route>
            <Route exact path="/howto" component={ HowTo } ></Route>
            
    
            <div className="container">
                <Route exact path="/ulogin" component={ ulogin } ></Route>
                <Route exact path="/uregister" component={ uregister } ></Route>
                <Route exact path="/udashboard" component={ Udashboard } ></Route>
                <Route exact path ="/profile" component = {profile}></Route>
            </div>

            <div className="container">
                <Route exact path="/chemist/login" component = { clogin }></Route>
                <Route exact path="/chemist/register" component = { cregister }></Route>
                <Route exact path="/chemist/dashboard" component = { cdashboard }></Route>

            </div>




          </div>
          </div>

          </Router>
      </Provider>
    );
  }
}

export default App;
