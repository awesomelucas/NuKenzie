const TotalMoney = ({ listTransactions }) => {
  return listTransactions.reduce((p, c) => {
    c = c.value * 1;
    return p + c;
  }, 0);
};

export default TotalMoney;
