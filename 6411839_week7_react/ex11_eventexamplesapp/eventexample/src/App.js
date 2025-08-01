import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! You've just increased the counter.");
  };

  sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  handleClick = (event) => {
    alert("I was clicked (Synthetic Event Triggered)");
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Example</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome('Welcome to the Event App')}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleClick}>Click Me (Synthetic Event)</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
