import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const CardView = () => {
  return (
    <div className="card-view">
      <div className="issuer">Visa</div>
      <div className="pan">4444 4444 4444 4444</div>
      <div className="name">Manuel Tejeda</div>
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
      <div className="container">
        <CardView />
        <div className="card-form">
          <form>
            <input type="text" name="pan" />
            <input
              type="text"
              name="cardholder"
              onChange={this.handleChangeCardHolder}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
