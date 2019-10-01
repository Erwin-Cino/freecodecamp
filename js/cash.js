let bills = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];





function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let result = {status: null, change: []}
  let total = cid.reduce((a,b) => {
    return a + b[1];
  },0)


  
  let register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });

  console.log(JSON.stringify(register));

  if (register.total === change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }


  if (register.total < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  let moreChange = bills.reduce((acc, current) => {

    let value = 0

    while (register[current.name] > 0 && change >= current.val) {
      console.log(current.val);
      change -= current.val;
      register[current.name] -= current.val;
      console.log((register[current.name]))
      value += current.val;
      console.log(change);
      console.log(value);
      change = Math.round(change * 100) / 100;
    } 

    if (value > 0) {
        acc.push([ current.name, value ]);
    }
    //console.log(JSON.stringify(acc));
    return acc;
      

  },[])

  console.log(moreChange);

  if (moreChange.length < 1 || change > 0) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result
  }



  // Here is your change, ma'am.
  result.status = 'OPEN';
  result.change = moreChange;
  return result;
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

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);