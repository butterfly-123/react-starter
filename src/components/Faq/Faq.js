import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { faqText } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
 
const Faq = ({titleText, imageUrl, contentText}) => (
  <Container>
 
    <Hero titleText={titleText} image={imageUrl} />
    <p className={contentText}>{ReactHtmlParser(contentText)}</p>
 
  </Container>
);
 
Faq.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageUrl: PropTypes.node.isRequired,
  contentText: PropTypes.string.isRequired,
};
 
Faq.defaultProps = {
  titleText: faqText.title,
  imageUrl: faqText.image,
  contentText: faqText.text,
};
 
export default Faq;