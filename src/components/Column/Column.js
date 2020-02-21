import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';



class Column extends React.Component {

  static propTypes = {
    title : PropTypes.node.isRequired,
    // cards: PropTypes.node.isRequired,
    icon:  PropTypes.node.isRequired,
    cards: PropTypes.node.isRequired,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  /*
    state = {
      cards: this.props.cards || [],
    }
  */
  
  /*
    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
              title,
              icon: 'list-alt',
              cards: [],
            },
          ],
        }
      ));
    }
  */
  
  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} 
          <span className={styles.icon}> 
            <Icon name={icon}/>
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        */}
      </section>
    );
  }
}

export default Column;