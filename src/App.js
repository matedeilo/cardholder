import React, {Component} from 'react';
import logo from './logo.svg';
import CardView from './CardView';
import {
  getCreditCardInfo,
  getFormattedValue,
  getFormattedExpiryDate,
} from './Utils';
import './App.css';

class App extends Component {
  state = {
    pan: 'XXXX',
    expiry: '',
  };
  handleChangePan = event => {
    event.preventDefault();
    const {value} = event.target;

    let pan, issuerImg;
    if (value.length == 0) {
      pan = 'XXXX';
    } else {
      //is valid card
      const {type, blocks} = getCreditCardInfo(value);
      issuerImg = `./icons/${type}.png`;
      //format number
      pan = getFormattedValue(value, blocks, blocks.length, ' ');
    }
    this.setState(() => ({
      pan,
      issuerImg,
    }));
  };
  handleChangeInput = event => {
    event.preventDefault();
    let {value, name} = event.target;
    if (name === 'expiry') {
      value = getFormattedExpiryDate(value);
    }

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleKeyPressExpiry = ({key, target}) => {
    if (key === 'Backspace' && target.value.length === 3) {
      this.setState(() => ({
        expiry: '',
      }));
    }
  };

  render() {
    const {pan, issuerImg, cardholder, expiry} = this.state;
    return (
      <div className="container">
        <CardView
          pan={pan}
          cardholder={cardholder}
          expiry={expiry}
          issuerImg={issuerImg}
        />
        <div className="card-form">
          <form>
            <div className="item">
              <label for="">Card number</label>
              <input type="text" name="pan" onChange={this.handleChangePan} />
            </div>
            <div className="item">
              <label for="" className="label">
                Name on card
              </label>
              <input
                type="text"
                name="cardholder"
                onChange={this.handleChangeInput}
              />
            </div>
            <div className="item">
              <div className="item-half">
                <label for="">Expiry date</label>
                <input
                  type="text"
                  name="expiry"
                  value={expiry}
                  onChange={this.handleChangeInput}
                  onKeyUp={this.handleKeyPressExpiry}
                />
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
