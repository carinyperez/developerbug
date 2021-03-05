import React from 'react'; 
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';
//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function
import {Provider} from 'react-redux'; 
import store from './redux/store'

const App = () =>  {
  return (
    <Provider store={store}>
    <Router>
      <div className='app-page'>
        <Header/>
        <Switch> 
          <Route exact path ='/' component={Homepage} />
          <Route exact path ='/login' component={Login}/>
          <Route exact path ='/signup' component={SignUp}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
