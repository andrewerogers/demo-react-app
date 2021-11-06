import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Dummy comment
// Views
import Home from './views/home/Home.js';
import About from './views/About.js';
import Users from './views/Users.js';

// Bootstrap imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Pokemon Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          padding:"2rem"
        }}
      >
        <Switch>
          <Route exact path="/demo-react-app">
            <Redirect to="/home" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
