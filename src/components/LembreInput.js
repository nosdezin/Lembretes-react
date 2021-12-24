import {useContext} from 'react';
import Context from './Context';

function LembreInput(){
    const [nome,setNome] = useContext(Context);

    function sub(){
        const texto = document.getElementById("textI")
        setNome(texto.value)
    }

    return (
        <div className="input_container">
            <input type="text" id="textI" placeholder="Digite o nome do Lembrete"/>
            <button type="button" onClick={sub}>Criar Lembrete</button>
        </div>
    )
}

export default LembreInput