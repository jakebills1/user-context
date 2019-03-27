import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Hobbies from './components/Hobbies.js';
import AddHobby from './components/AddHobby';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/hobbies" component={Hobbies} />
        <Route exact path="/hobbies/add" component={AddHobby} />
      </Switch>
    </Container>
  </Fragment>
)
export default App;
