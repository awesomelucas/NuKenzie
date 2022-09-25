import "./style.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(1);

  const sub = (event) => {
    event.preventDefault();
    if (description && type && value) {
    
      setListTransactions((maluco) => [
        ...maluco,
        { description, type, value },
      ]);
      setDescription("");
      setType("");
      setValue(0);
    }
  };

  return (
    <form onSubmit={sub}>
      <label className="labelDesc" htmlFor="description">
        Descrição
      </label>
      <input
        onChange={(event) => setDescription(event.target.value)}
        className="inputDesc"
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        required
      />
      <span>Ex: Compra de roupas</span>

      <label className="labelValue" htmlFor="valor">
        Valor
      </label>
      <input
        onChange={(event) => setValue(event.target.value)}
        className="inputValue"
        type="number"
        name="valor"
        placeholder="Valor"
        required
      />
      <span className="ex">Ex: -100 para saídas e 100 para entradas</span>
      <label className="labelType-value" htmlFor="type">
        Tipo de valor
      </label>
      <select
        onChange={(event) => setType(event.target.value)}
        name="type"
        id="type"
      >
        <option value="entrada">Tipo de valor</option>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>

      <button className="btn-form" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
