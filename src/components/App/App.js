import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Hero from '../Hero/Hero';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData} />
        </main>
        <List 
          title={['Things to do ', <sup key='1'>soon!</sup>]}
          imgSrc={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}
        />
      </div>
    )
  }
}

export default App;
