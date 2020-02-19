import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
    <section className={styles.component}>
        <h3>{props.title}</h3>
    </section>
);

Card.PropTypes = {
    title: PropTypes.node.isRequired,
};


export default Card;