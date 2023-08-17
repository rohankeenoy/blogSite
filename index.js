import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import Home from './containers/Home';


const AppContainer = () => {
  return (

    <div>
      <BrowserRouter>
    
      <Route component = {LandingPage} exact path = '/'></Route>
      <Route component = {Home} exact path = '/home'></Route>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));

