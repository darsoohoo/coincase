const btc = 4300;
const btcDesc = 'This is a Bitcoin';
const btcItem = 'BTC';
const xrp = .34;
const xrpDesc = 'This is a XRP';
const xrpItem = 'XRP';
const eth = 124;
const ethDesc = 'This is an Ethereum';
const ethItem = 'ETH';
let totalPrice = 0;


function addBitcoin(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = btcItem;
  cell2.innerHTML = btcDesc;
  cell3.innerHTML = btc;
  totalPrice = totalPrice + btc;
  document.getElementById("total").innerHTML = totalPrice;
return totalPrice;
}

function addXRP(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = xrpItem;
  cell2.innerHTML = xrpDesc;
  cell3.innerHTML = xrp;
  totalPrice = totalPrice + xrp;
  document.getElementById("total").innerHTML = totalPrice;
return totalPrice;
}

function addEthereum(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = ethItem;
  cell2.innerHTML = ethDesc;
  cell3.innerHTML = eth;
  totalPrice = totalPrice + eth;
  document.getElementById("total").innerHTML = totalPrice;
return totalPrice;
}
