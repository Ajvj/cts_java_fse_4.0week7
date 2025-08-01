import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <h1>✈️ Ticket Booking App</h1>
        {isLoggedIn ? (
          <UserPage onLogout={this.handleLogout} />
        ) : (
          <GuestPage onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
