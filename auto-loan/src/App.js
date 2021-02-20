import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import ApplicationReults from "./components/pages/ApplicationResults";
import Disqualification from "./components/pages/Disqualification";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh" }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/myapplication" component={ApplicationReults} />
        <Route exact path="/disqualification" component={Disqualification} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
