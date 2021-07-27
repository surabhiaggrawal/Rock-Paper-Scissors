import React from 'react';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Cockpit } from './container/cockpit/cockpit'

function App() {

  return (
    <div className="App">
      <Cockpit />
      <Footer />
    </div>
  );
}

export default App;
