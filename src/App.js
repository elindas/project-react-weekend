import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home'
import Header from './component/Header'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Register from './pages/Register'
import MockApi from './pages/MockApi'
import OpenApi from './pages/OpenApi'

function App() {

  const isLogin = JSON.parse(localStorage.getItem('status'))


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/mockapi">
          <MockApi />
        </Route>
        <Route path="/openapi">
          <OpenApi />
        </Route>
        
        
        <Route path="/signin">
          <Signin isLogin={isLogin} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;