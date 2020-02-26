import React from 'react';
import Container from '../Container/Container';
import {faqText} from '../../data/dataStore';
import styles from './Faq.scss';


const Faq = () => (
  <Container>
    <h1>{faqText.title}</h1>
    <p>{faqText.subtitle}</p>
    <img className={styles.image}src={faqText.image}></img>
  </Container>
);

export default Faq;