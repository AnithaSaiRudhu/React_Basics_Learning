import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App/Layout/Header';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import Counter from './App/Components/Counter';
import DestinationList from './App/Components/DestinationList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store={store}>
      <Header/>
      <Counter/>
      <DestinationList/>
   </Provider>
   </div>
);


