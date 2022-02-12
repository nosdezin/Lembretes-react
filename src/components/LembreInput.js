function LembreInput({ handleOnCHange, handleSubmit, clearHandle }) {
  return (
    <div className="input_container">
      <input
        onChange={handleOnCHange}
        type="text"
        id="textI"
        placeholder="Digite o nome do Lembrete"
      />
      <button type="button" onClick={handleSubmit}>
        Criar Lembrete
      </button>
      <button type="button" onClick={clearHandle}>
        Limpar Lembretes
      </button>
    </div>
  );
}

export default LembreInput;
