import React, { Component } from 'react';
import {Landing} from './components/Landing'
import NotFound from './components/notFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/sign-in" exact component={Landing} />
      <Route  component={NotFound} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
