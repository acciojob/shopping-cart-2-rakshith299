//your code here
function add(){
    const name = document.getElementById("item-name-input");
    const price = document.getElementById("item-price-input");
    let total = document.getElementById("total");

    let nameVal = name.value;
    let priceVal = price.value;
    let curPrice = Number(total.innerText);


    curPrice = curPrice + Number(priceVal);
    total.innerText = curPrice;

    let newrow = document.createElement("tr");
    newrow.classList.add("row");

    let nameCol = document.createElement("td");
    nameCol.classList.add("col");
    nameCol.innerText = nameVal;

    let priceCol = document.createElement("td");   
    nameCol.classList.add("col");
    priceCol.innerText = priceVal;

    newrow.appendChild(nameCol);
    newrow.appendChild(priceCol);

    let table = document.getElementById("table");
    table.appendChild(newrow);



}