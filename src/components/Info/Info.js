import React from 'react';
import Container from '../Container/Container';
import {infoText} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


const Info = ({titleText, imageUrl, contentText}) => (
  <Container>

    <Hero titleText={titleText} image={imageUrl} />
    <p className={contentText}>{ReactHtmlParser(contentText)}</p>

  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node.isRequired,
  contentText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Info.defaultProps = {
  titleText: infoText.title,
  contentText: infoText.text,
  imageUrl: infoText.image,
};

export default Info;