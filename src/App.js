import React, { Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

//components
import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from './components/layout/navbar'; 
import HowTo from './components/HowTo';
import front from './components/Front/front';
import join  from './components/join';
import ulogin from './components/auth/user/ulogin';
import uregister from './components/auth/user/uregister';
import plogin from './components/auth/pharmacist/plogin';
import pregister from './components/auth/pharmacist/pregister';
import hlogin from './components/auth/hospital/hlogin';
import hregister from './components/auth/hospital/hregister';
import Udashboard from './components/dashboard/dashboard';
//import Alert from './components/layout/alert';

//alerts



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render() {
    return ( 
      <Provider store={ store }>
        <Router>
          <div className="App" >
            <Navbar/>
            <Route exact path="/" component={ front } ></Route>
            <Route exact path='/join' component={join}></Route>
            <Route exact path="/howto" component={ HowTo } ></Route>
            <div className="container">
                <Route exact path="/ulogin" component={ ulogin } ></Route>
                <Route exact path="/uregister" component={ uregister } ></Route>
                <Route exact path="/plogin" component={ plogin } ></Route>
                <Route exact path="/pregister" component={ pregister } ></Route>
                <Route exact path="/hlogin" component={ hlogin } ></Route>
                <Route exact path="/hregister" component={ hregister } ></Route>
                <Route exact path="/udashboard" component={ Udashboard } ></Route>
            </div>
          </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
