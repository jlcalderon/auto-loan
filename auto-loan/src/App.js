import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import Disqualification from "./components/pages/Disqualification";
import ApplicationReults from "./components/pages/ApplicationResults";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/myapplication" component={ApplicationReults} />
        <Route exact path="/disqualification" component={Disqualification} />
      </Router>
    </div>
  );
}

export default App;
