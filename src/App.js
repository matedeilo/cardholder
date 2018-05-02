import React, {Component} from 'react';
import logo from './logo.svg';
import CardView from './CardView';
import {
  getCreditCardInfo,
  getFormattedValue,
  getFormattedExpiryDate,
} from './Utils';
import './App.css';
import styled, {injectGlobal, css} from 'styled-components';

injectGlobal`
@import url(https://fonts.googleapis.com/css?family=Iceland);
  .App {
    text-align: center;
  }

  .container {
    display: flex;
    height: calc(100vh - 2rem);
    margin: 1rem 10rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
  }
`;

const Label = styled.label`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  color: #605c5c;
  text-transform: uppercase;
  margin: 5px 0 0 10px;
`;

const grayborder = css`
  ${props => {
    if (props.showBorder) {
      return `
      border-left: 1px solid #e4e4e4;
      `;
    }
  }};
`;

const Input = styled.input`
  width: 100%;
  padding: 32px 12px 12px;
  font-size: 18px;
  color: #262626;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
  margin-bottom: 0 !important;
  ${grayborder};
`;

// const Form = styled.form`
//   border-top: 1px solid #e4e4e4;
// `;

const BoxItem = styled.div`
  display: flex;
  width: ${props => (props.size === 'half' ? '50%' : '100%')};
`;

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
            <BoxItem>
              <Label>Card number</Label>
              <Input type="text" name="pan" onChange={this.handleChangePan} />
            </BoxItem>
            <BoxItem>
              <Label>Name on card</Label>
              <Input
                type="text"
                name="cardholder"
                onChange={this.handleChangeInput}
              />
            </BoxItem>
            <BoxItem>
              <BoxItem size="half">
                <Label>Expiry date</Label>
                <Input
                  type="text"
                  name="expiry"
                  value={expiry}
                  onChange={this.handleChangeInput}
                  onKeyUp={this.handleKeyPressExpiry}
                />
              </BoxItem>
              <BoxItem size="half">
                <Label>CVC number</Label>
                <Input showBorder="true" type="text" name="cardholder" />
              </BoxItem>
            </BoxItem>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
