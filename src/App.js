import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";
import Countries from "./Countries";
import FootballClub from "./Football";
import Home from "./Home";

function App() {
  return (
          <Router>
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Know Your World</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/countries">Countries</Nav.Link>
            <Nav.Link href="/football">Football Club</Nav.Link>
            </Nav>
            </Navbar>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/countries" component={Countries}/>
                <Route path="/football" component={FootballClub}/>
            </Switch>
        </div>
        </Router>
  );
}

export default App;