import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utilis/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <Header />
      <Body />
      <Footer />
   </div>
   </Provider>
  );
}

export default App;
