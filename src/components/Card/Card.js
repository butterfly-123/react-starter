import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {title} = props;
  
  return (
    <section className={styles.component}>
      <h3>{title + 'Aneta'}</h3>
    </section>
  );
};

// function Card(props) {
//   const {title} = props;

//   return <section className={styles.component}><h3>{title + "Aneta"}</h3></section>
// }
//const Card = props => <section className={styles.component}><h3>{props.title + "Aneta"}</h3></section>

Card.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Card;