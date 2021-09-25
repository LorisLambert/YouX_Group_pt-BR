import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodepe';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <div className="Container">
      </div>
      <Rodape/>
    </div>
  );
}

export default App;
