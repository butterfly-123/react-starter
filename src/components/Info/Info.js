import React from 'react';
import Container from '../Container/Container';
import {infoText} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>{infoText.title}</h2>
    <p>{infoText.subtitle}</p>
  </Container>
);

export default Info;