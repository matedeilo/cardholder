import React from 'react';
import PropTypes from 'prop-types';

CardView.defaultProps = {
  issuerImg: './icons/unknown.png',
};

export default function CardView({pan, cardholder, expiry, issuerImg}) {
  return (
    <div className="card-view">
      <div className="issuer">
        <img src={issuerImg} />
      </div>
      <div className="pan">{pan}</div>
      <div className="holder-expiry">
        <dl>
          <dt>Cardholder</dt>
          <dd>{cardholder}</dd>
        </dl>
        <dl>
          <dt>Expiry date</dt>
          <dd>{expiry}</dd>
        </dl>
      </div>
    </div>
  );
}
