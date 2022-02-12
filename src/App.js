import { useState } from "react";
import "./App.css";
import LembreInput from "./components/LembreInput";
import LembreteCaixa from "./components/LembreteCaixa";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [textV, setTextV] = useState("");
  const [fisrtLemb, setFirstLemb] = useState(true);

  return (
    <div>
      <LembreInput
        handleOnCHange={(e) => {
          setTextV(e.target.value);
        }}
        handleSubmit={() => {
          const novaMSG = { texto: textV, id: uuidv4() };
          if (items.length + 1 <= 12) {
            setItems([...items, novaMSG]);
            setFirstLemb(false);
          }
        }}
        clearHandle={() => {
          setItems([]);
          setTextV("");
          setFirstLemb(true);
        }}
      />

      <div>
        {fisrtLemb === true ? (
          <p className="Aviso">Digite seu primeiro Lembrete</p>
        ) : (
          items.map((item) => (
            <LembreteCaixa texto={item.texto} key={item.id} />
          ))
        )}

        {/* {items.map((item) => (
          <LembreteCaixa texto={item.texto} key={item.id} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
