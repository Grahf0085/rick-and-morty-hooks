import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Characters from '../../containers/Characters';
import CharDetail from '../../containers/CharDetail';
import Header from '../Header';
import './app.css';

export default function App() {
  return <section className="App">
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact={true}
            render={routerProps => (
              <Characters {...routerProps} />
            )}
          />
          <Route path="/character/:id" exact={true}
            render={routerProps => (
              <CharDetail {...routerProps} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  </section>;
}
