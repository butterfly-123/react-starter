import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
      <Route exact path='/faq' component={Faq} />
    </MainLayout>
  </BrowserRouter>
);

export default App;