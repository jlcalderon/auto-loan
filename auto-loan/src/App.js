import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ApplicationReults from "./components/pages/ApplicationResults";
import Disqualification from "./components/pages/Disqualification";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/myapplication" component={ApplicationReults} />
        <Route exact path="/disqualification" component={Disqualification} />
      </Router>
    </div>
  );
}

export default App;
