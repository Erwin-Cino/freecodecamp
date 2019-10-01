function checkCashRegister(price, cash, cid) {
  var change = {
    "status": '',
    "change": []
  };
  let cashChange = price - cash;
  cashChange = Math.abs(cashChange);
  let value = 0;
  let numCurrency = 0;
  let total = cid.reduce((a,b) => {
    return a + b[1]
  },0);
  cid.map( x => {
    //console.log(accumulator)
    //console.log(x[1]);
    if (cashChange > total) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      console.log(JSON.stringify(change))
    } else if (x[1] == cashChange) {
      change.status = "CLOSED";
      console.log(x[1])
      change.change = cid.slice(cid.indexOf(x));
      console.log(JSON.stringify(change));
    } else if (cashChange < total && x[1] !== cashChange) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      console.log(JSON.stringify(change))
    }
  }, 0);


  console.log(total)
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])