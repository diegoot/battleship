import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import SetupPage from 'components/container/SetupPage';
import GamePage from 'components/container/GamePage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Redirect to="/setup" />} />
          <Route path="/setup" component={SetupPage} />
          <Route path="/game" component={GamePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;