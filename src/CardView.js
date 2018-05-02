import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardBox = styled.div`
  width: 75%;
  max-width: 410px;
  min-width: 350px;
  height: 30%;
  /* background: rgb(79, 77, 77); */
  background: linear-gradient(135deg, #bd6772, #53223f);
  color: whitesmoke;
  font-family: 'Iceland', cursive;
  font-size: 1.6em;
  border-radius: 8px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
`;

const IssuerBox = styled.div`
  text-align: right;
  margin: 5px 20px;
`;

const PanBox = styled.div`
  margin: 35px 20px;
`;

const IssuerImg = styled.img`
  width: 1.5em;
  margin-top: 5px;
`;

const ExpiryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

const Dt = styled.dt`
  font-size: 0.6em;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
`;

CardView.defaultProps = {
  issuerImg: './icons/unknown.png',
};

export default function CardView({pan, cardholder, expiry, issuerImg}) {
  return (
    <CardBox>
      <IssuerBox>
        <IssuerImg src={issuerImg} />
      </IssuerBox>
      <PanBox>{pan}</PanBox>
      <ExpiryBox>
        <dl>
          <Dt>Cardholder</Dt>
          <dd>{cardholder}</dd>
        </dl>
        <dl>
          <Dt>Expiry date</Dt>
          <dd>{expiry}</dd>
        </dl>
      </ExpiryBox>
    </CardBox>
  );
}
