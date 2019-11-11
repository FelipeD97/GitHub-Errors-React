import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Issues from "./components/issueList";
import Wrapper from "./components/wrapper";
import { Navbar, NavbarStart, NavbarItem } from "bloomer";


import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar style={{ border: "solid 3px #00D1B2", margin: "0" }}>
            <NavbarStart>
              <NavbarItem>
                <Link to="/">Home</Link>
              </NavbarItem>
              <NavbarItem className="list-title">
                GitHub Issues Report List
              </NavbarItem>
            </NavbarStart>
          </Navbar>
          <Route path="/issues/:id" />
          <Issues />
      </Router>
    </div>
  );
}

export default App;
