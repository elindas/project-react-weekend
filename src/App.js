import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import TodoList from "./pages/Todolist"
import Signin from "./pages/SignIn"
import About from "./component/About"

function App() {
  const isLogin = JSON.parse(localStorage.getItem("status"));
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* semua di dlm swith bisa dipindah-pindah */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Todolist">
            {isLogin ? <TodoList /> : <Redirect to="/"/>}
          </Route>
          <Route exact path="/SignIn">
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
