import React from 'react';
import { Jumbotron, Button } from 'reactstrap'
import Welcome from './components/Welcome';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/navbar' component={Navbar} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
