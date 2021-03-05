import React from 'react'; 
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';

const App = () =>  {
  return (
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
    
  );
}

export default App;
