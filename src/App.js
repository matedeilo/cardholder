import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const CardView = () => {
  return (
    <div className="card-view">
      <label className="number">4444 4444 4444 4444</label>
      <label className="name">Manuel Tejeda</label>
    <div className="issuer">Visa</div>
    </div>
  );
};

class App extends Component {
  state = {
    cardHolder: '',
  };

  handleChangeCardHolder = event => {};

  render() {
    return (
      <div className="App">
        <CardView />
        <form>
          <input type="text" name="pan" />
          <input
            type="text"
            name="cardholder"
            onChange={this.handleChangeCardHolder}
          />
        </form>
      </div>
    );
  }
}

export default App;
