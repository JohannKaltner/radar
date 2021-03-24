import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/header";
import "antd/dist/antd.css";
import Footer from "./components/common/footer";
import "./App.css";
import Home from "./components/home";
export default function App() {
  return (
    <Router>
      <div className="container" style={{ backgroundColor: "white" }}>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="inner-container">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/oficinas">
              <Oficinas />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login Page</h2>;
}

function Oficinas() {
  return <h2>Oficinas</h2>;
}
