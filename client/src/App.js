import React, {useEffect} from 'react'; 
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';
//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function
import {Provider} from 'react-redux'; 
import store from './redux/store'
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './redux/reducers/auth/auth.actions';
import Dashboard from './components/dashboard/dashboard.component';
import PrivateRoute from './components/privateroute/privateroute.component'; 
import Profile from './components/profile/profile.component';
import EditProfile from './components/edit-profile/edit-profile';
import AddExperience from './components/add-experience/add-experience.component';
import AddEducation from './components/add-education/add-education.component';
import Developers from './components/developers/developers.component';
import DeveloperProfile from './components/developerprofile/developerprofile';


if(localStorage.token) {
  setAuthToken(localStorage.token)
}
const App = () =>  {
  // when we use the empty brackets acts like component did mount, otherwise it's a loop 
  useEffect(() => {
    // dispatch is a method in the store 
    // actions are sent to the store through the dispatch method 
    store.dispatch(loadUser()); 
  }, [])
  return (
    <Provider store={store}>
    <Router>
      <div className='app-page'>
        <Header/>
        <Switch> 
          <Route exact path ='/' component={Homepage} />
          <Route exact path ='/login' component={Login}/>
          <Route exact path ='/signup' component={SignUp}/>
          <Route exact path ='/developers' component={Developers}/>
          <Route exact path ='/developer/:id' component={DeveloperProfile}/>
          <PrivateRoute exact path ='/dashboard' component={Dashboard}/>
          <PrivateRoute exact path ='/create-profile' component={Profile}/>
          <PrivateRoute exact path ='/edit-profile' component={EditProfile}/>
          <PrivateRoute exact path ='/add-experience' component={AddExperience}/>
          <PrivateRoute exact path ='/add-education' component={AddEducation}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
