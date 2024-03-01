import React, { useState } from 'react';
import './cofrinho.css';

function Cofrinho() {
  const [moedas, setMoedas] = useState<number>(0);

  const encontrarMoeda = () => {
    setMoedas(moedas + 1);
  };

  return (
    <div className="cofrinho">
        <hr></hr>
        <h1>COFRINHO</h1>
      <p className='blinking-text'>Eu tenho {moedas} moedas no meu cofrinho!</p>
      <div className="BotaoDourado">
      <button onClick={encontrarMoeda}>Encontrei uma moeda!</button>
      </div>
    </div>
  );
}

export default Cofrinho;