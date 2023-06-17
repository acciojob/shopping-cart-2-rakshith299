 const itemNameInput = document.getElementById("item-name-input");
    const itemPriceInput = document.getElementById("item-price-input");
    const addButton = document.getElementById("add-button");
    const cartItems = document.getElementById("cart-items");
    const grandTotalElement = document.querySelector("[data-ns-test='grandTotal']");

    // Initialize the grand total
    let grandTotal = 0;

    // Function to update the grand total in the table
    function updateGrandTotal() {
      grandTotalElement.textContent = grandTotal;
    }

    // Event listener for the add button
    addButton.addEventListener("click", function() {
      const itemName = itemNameInput.value.trim();
      const itemPrice = parseFloat(itemPriceInput.value.trim());

      // Validate input
      if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Invalid input. Please enter a valid item name and price.");
        return;
      }

      // Create a new row in the table for the item
      const newRow = document.createElement("tr");

      // Create the table cells for item name and price
      const itemNameCell = document.createElement("td");
      const itemPriceCell = document.createElement("td");

      // Set the text content and data attributes
      itemNameCell.textContent = itemName;
      itemNameCell.setAttribute("data-ns-test", "item-name");

      itemPriceCell.textContent = itemPrice;
      itemPriceCell.setAttribute("data-ns-test", "item-price");

      // Append the cells to the row
      newRow.appendChild(itemNameCell);
      newRow.appendChild(itemPriceCell);

      // Append the row to the cart items table
      cartItems.appendChild(newRow);

      // Update the grand total
      grandTotal += itemPrice;
      updateGrandTotal();

      // Clear input fields
      itemNameInput.value = "";
      itemPriceInput.value = "";
    });