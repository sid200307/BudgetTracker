document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expenses");
    expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const expenseName = document.getElementById("expense-name").value;
    
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);
    
    if (expenseName && !isNaN(expenseAmount)) {
    addExpense(expenseName, expenseAmount);
    expenseForm.reset();
    } else {
    alert("Please enter valid expense details.");
    }
    });
    function addExpense(name, amount) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <span>${name}</span>
    <span>${amount.toFixed(2)}RS</span>
    `;
    expenseList.appendChild(listItem);
    }
    });