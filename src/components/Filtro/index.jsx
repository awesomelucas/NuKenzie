import "./style.css";

const Filtro = ({ setListTransactions, listTransactions, filterEntrada }) => {
  return (
    <div>
      <h3>Resumo financeiro</h3>
      <div className="button-area">
        <button
          className="btn-filtro"
          onClick={(event) => {
            event.preventDefault();
            filterEntrada("todos");
          }}
        >
          Todos
        </button>
        <button
          className="btn-filtro"
          onClick={(event) => {
            event.preventDefault();
            filterEntrada("entrada");
          }}
        >
          Entradas
        </button>
        <button
          className="btn-filtro"
          onClick={(event) => {
            event.preventDefault();
            filterEntrada("saida");
          }}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Filtro;
