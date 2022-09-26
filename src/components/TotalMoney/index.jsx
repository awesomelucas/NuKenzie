const TotalMoney = ({ listTransactions }) => {
  return listTransactions.reduce((p, c) => {
    return p+ c.valor
  },0);
};

export default TotalMoney;
