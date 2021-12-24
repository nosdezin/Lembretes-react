import React from "react";
import "./App.css";
import LembreInput from "./components/LembreInput";
import LembreteCaixa from './components/LembreteCaixa';
import Context from "./components/Context";

function App() {
  const [nome, setNome] = React.useState('');
  
  return (
    <Context.Provider value={[nome,setNome]}>
      <div>
        <LembreInput />

        {nome ? (<LembreteCaixa texto={nome}/>) : (<p>Não há nada aqui</p>)}
      </div>
    </Context.Provider>
  );
}

export default App;
