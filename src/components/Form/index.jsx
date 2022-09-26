import "./style.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Tipo de Valor");
  const [value, setValue] = useState("");

  const sub = (event) => {
    event.preventDefault();
    if (description && type && value) {
 
      setListTransactions((maluco) => {
        
        let valor = Number(value)
        if(type === "saida"){
          valor = -valor
        }
        return [
        ...maluco,
        { id:listTransactions.length+1, description, type, valor },
      ]});
      setDescription("");
      setType("Tipo de Valor");
      setValue("");
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
        value={description}
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
        type="text"
        name="valor"
        value={value}
        placeholder="Valor"
        required
      />
      <label className="labelType-value" htmlFor="type">
        Tipo de valor
      </label>
      <select
      value={type}
        onChange={(event) => setType(event.target.value)}
        name="type"
        id="type"
      >
        <option value={type}>{type}</option>
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
