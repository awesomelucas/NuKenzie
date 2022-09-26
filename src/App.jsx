import "./App.css";
import Index from "./components/Index";
import HomeNoCard from "./components/Home-No-Card";
import { useState } from "react";

function App() {
  const [inicial, setInicial] = useState([])

  const [listTransactions, setListTransactions] = useState([]);

  // const [entrada, setEntrada] = useState([])

  const [index, setIndex] = useState(false);


  const deleteCard = (del)=>{
    setListTransactions(
        listTransactions.filter((element)=>{
            return element.id !== del
        })
    )
    setInicial(
      listTransactions.filter((element)=>{
        return element.id !== del
    })
    )
}

const filterEntrada = (tipo)=>{
  if(tipo === "todos"){
    setInicial([])
  }
    setInicial( listTransactions.filter(( {type} )=>type ===tipo))
  
}

  const handlerIndex = () => {
    setIndex(true);
  };

  const logout = ()=>{
    setIndex(false)
  }
  return (
    <div className="App">
      {index ? (
        !inicial.length ? (<HomeNoCard
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          deleteCard={deleteCard}
          filterEntrada={filterEntrada}
          logout={logout}
        />): (<HomeNoCard
          listTransactions={inicial}
          setListTransactions={setInicial}
          deleteCard={deleteCard}
          filterEntrada={filterEntrada}
          logout={logout}
        />)
      ) : (
        <Index handlerIndex={handlerIndex} />
      )}
    </div>
  );
}

export default App;
