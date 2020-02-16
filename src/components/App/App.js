import React from 'react';
import styles from './App.scss';
import List from '../List/List';


class App extends React.Component {
  render() {
    return (
      <div id="app">
        <mein className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
        </mein>
        <List /> 
      </div>
    )
  }
}

export default App;
