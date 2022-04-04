import React from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fontawesome-free/css/all.css';
import './assets/bootstrap/css/style.css';
import './assets/animated/animate.css';

// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/orang/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/orang/Add";
import Edit from "./components/orang/Edit";

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orang/add" component={Add} />
          <Route exact path="/orang/edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
