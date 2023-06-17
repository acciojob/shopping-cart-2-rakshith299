function add(){
    const name = document.getElementById("item-name-input");
    const price = document.getElementById("item-price-input");
    let total = document.getElementById("total");

    let nameVal = name.value.trim();
    let priceVal = price.value.trim();
    let curPrice = parseInt(total.innerText);


    curPrice = curPrice + Number(priceVal);
    total.innerText = curPrice;

    let newrow = document.createElement("tr");
    newrow.classList.add("row");

    let nameCol = document.createElement("td");
    nameCol.classList.add("col");
    nameCol.innerText = nameVal;
    nameCol.setAttribute("data-ns-test", "item-name");

    let priceCol = document.createElement("td");   
    nameCol.classList.add("col");
    priceCol.innerText = priceVal;
    nameCol.setAttribute("data-ns-test", "item-price");

    newrow.appendChild(nameCol);
    newrow.appendChild(priceCol);

    let table = document.getElementById("table");
    table.appendChild(newrow);

    name.value = "";
    price.value = "";



}