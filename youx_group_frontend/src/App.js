import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodepe';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <div className="Container">
        <h1>Bem-vindo!</h1>
        <Login />
      </div>
      <Rodape/>
    </div>
  );
}

export default App;
