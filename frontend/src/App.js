import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Main} />
          <Route exact path='/' component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
