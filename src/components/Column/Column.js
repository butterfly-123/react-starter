import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
// import Card from '../Card/Card';
import Icon from '../Icon/Icon';



class Column extends React.Component {

  static propTypes = {
    title : PropTypes.node.isRequired,
    // cards: PropTypes.node.isRequired,
    icon:  PropTypes.node.isRequired,
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
    const {title, icon} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} 
          <span className={styles.icon}> 
            <Icon name={icon}/>
          </span>
        </h3>
        {/*
          <div>
            {this.state.cards.map(({key, ...cardsProps}) => (
              <Card key={key} {...cardsProps} />
            ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        */}
      </section>
    );
  }
}

export default Column;