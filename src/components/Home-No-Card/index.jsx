import Header from "../Header";
import Form from "../Form";
import Filtro from "../Filtro";
import Lancamentos from "../Laçamentos";
import TotalMoney from "../TotalMoney";
import "./style.css";

const HomeNoCard = ({listTransactions, setListTransactions, deleteCard, filterEntrada, logout}) => {


  return (
    <>
      <Header logout={logout} />
      <div className="homeNoCard">
        <Filtro setListTransactions={setListTransactions} listTransactions={listTransactions} filterEntrada={filterEntrada} />
        <Lancamentos listTransactions={listTransactions} deleteCard={deleteCard}/>
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
        {
          listTransactions.length !== 0 ? <div className="total">
          <span>Valor total:</span>
          <span className="totalMoney">$<TotalMoney listTransactions={listTransactions}/></span>
          <p>O valor se refere ao saldo</p>
        </div>
        : <p>Sem entradas</p>
        }
      </div>
    </>
  );
};

export default HomeNoCard;
