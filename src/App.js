import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Content from './Content';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Cats Demo</h1>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Content /> : <h3>Please Log In</h3>}
      </>
    );
  }
}

export default withAuth0(App);
