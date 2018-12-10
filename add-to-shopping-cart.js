const btcDesc = 'This is a Bitcoin';
const btcItem = 'BTC';
const xrpDesc = 'This is a XRP';
const xrpItem = 'XRP';
const ethDesc = 'This is an Ethereum';
const ethItem = 'ETH';
let totalPrice = 0;

//ADDS 1 BITCOIN TO CART WHEN BUY BITCOIN BUTTON IS CLICKED
function addBitcoin(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = btcItem;
  cell2.innerHTML = btcDesc;
  cell3.innerHTML = liveBTC;
  totalPrice = totalPrice + parseFloat(liveBTC);
  document.getElementById("total").innerHTML = "$" + totalPrice.toFixed(2);
return totalPrice;
}


//ADDS 1 XRP TO CART WHEN BUY XRP BUTTON IS CLICKED
function addXRP(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = xrpItem;
  cell2.innerHTML = xrpDesc;
  cell3.innerHTML = liveXRP;
  totalPrice = totalPrice + parseFloat(liveXRP);
  document.getElementById("total").innerHTML = "$" + totalPrice.toFixed(2);
return totalPrice;
}

//ADDS 1 ETH TO CART WHEN BUY ETHEREUM BUTTON IS CLICKED
function addEthereum(){
  let cart = document.getElementById("myCart");
  let row = cart.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = ethItem;
  cell2.innerHTML = ethDesc;
  cell3.innerHTML = liveETH;
  totalPrice = totalPrice + parseFloat(liveETH);
  document.getElementById("total").innerHTML = "$" + totalPrice.toFixed(2);
return totalPrice;
}
