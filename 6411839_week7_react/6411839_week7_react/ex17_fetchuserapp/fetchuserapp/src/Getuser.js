import React, { Component } from 'react';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data.results[0] });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Random User Details</h2>
        {user ? (
          <div>
            <h3>{user.name.title} {user.name.first}</h3>
            <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }
}

export default Getuser;
