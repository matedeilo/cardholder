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
            <div className="item">
              <label for="">Card number</label>
              <input type="text" name="pan" />
            </div>
            <div className="item">
              <label for="" className="label">Name on card</label>
              <input
                type="text"
                name="cardholder"
                onChange={this.handleChangeCardHolder}
              />
            </div>
            <div className="item">
              <div className="item-half">
                <label for="">Expiry date</label>
                <input type="text" name="cardholder" />
              </div>
              <div className="item-half">
                <label for="">CVC number</label>
                <input className="border-left" type="text" name="cardholder" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
