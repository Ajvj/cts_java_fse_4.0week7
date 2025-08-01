import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euroRate = 0.011; // 1 INR = 0.011 Euro (example rate)
    const euros = (this.state.rupees * euroRate).toFixed(2);
    this.setState({ euros });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter amount in INR: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euros && <p>Equivalent in Euro: €{this.state.euros}</p>}
      </div>
    );
  }
}

export default CurrencyConvertor;
