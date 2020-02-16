
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imgSrc: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.imgSrc} />
        <b>{this.props.aneta}</b>
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column title={'Animals'} />
          <Column title={'Plants'} />
          <Column title={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;
