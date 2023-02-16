let balance;
let totalExpense;
// let avingAmount;
document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalIncome = document.getElementById("income-source").value;

    const foodCostString = document.getElementById("food-cost").value;
    const foodCost = parseInt(foodCostString);

    const rentCost = document.getElementById("rent-cost").value;
    const clothCost = document.getElementById("cloth-cost").value;
    
    totalExpense = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = totalExpense;


    balance = document.getElementById('balance-expense');
    balance.innerText= parseInt(totalIncome) - totalExpense;

})

// parsentage convert
function percentage(num, per)
{
  return (num/100)*per;
}


document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncomeStirng = document.getElementById("income-source").value;
    const totalIncome = parseInt(totalIncomeStirng);

    const saveInputStirng = document.getElementById('saving-input').value;
    const saveInput = parseInt(saveInputStirng);


    const parsentMake = percentage(totalIncome, saveInput);

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parsentMake;

    const totalSumRemainig = parseInt(balance.innerText) - parseInt(savingAmount.innerText);
    
    const remaingBalance = document.getElementById('reamining-balance');
    remaingBalance.innerText = totalSumRemainig;
})