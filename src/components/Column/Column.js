import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';



class Column extends React.Component {

  static propTypes = {
    title : PropTypes.node.isRequired,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  state = {
    cards: this.props.cards || [],
  }
  
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  
  
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <span className={styles.icon}>
            <Icon name={this.props.icon}/>
        </span>
        <div>
          {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
      </section>
    )
  }
}

export default Column;