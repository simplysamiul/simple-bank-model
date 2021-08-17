document.getElementById("deposit-money").addEventListener("click", function(){
    // Get deposit amount that I will give
    const depoMoneyAmount = document.getElementById("money-amount");
    const getDepoAmount = parseFloat(depoMoneyAmount.value);
    // Get total deposit amount
    const totalDeposit = document.getElementById("total-deposit");
    const previousDepoAmount = parseFloat(totalDeposit.innerText);
    const finalDepoAmount = previousDepoAmount + getDepoAmount;
    totalDeposit.innerText = finalDepoAmount;
    // Add Money in Main Balance
    const mainBalance = document.getElementById("main-balance");
    const mainBalanceAmount = parseFloat(mainBalance.innerText);
    mainBalance.innerText = mainBalanceAmount + getDepoAmount;
    // clear input filed after given value
    depoMoneyAmount.value = "";
});

document.getElementById("withdraw-amount").addEventListener("click", function(){
    // Get withdraw input ammount
    const inputWithdraw = document.getElementById("input-withdraw");
    const getInputWithdraw = parseFloat(inputWithdraw.value);
    // Get withdraw ammount
    const totalWithdraw = document.getElementById("total-withdraw");
    const previousTotalWithdraw = parseFloat(totalWithdraw.innerText);
    const finalTotalWithdraw = previousTotalWithdraw + getInputWithdraw;
    totalWithdraw.innerText = finalTotalWithdraw;
    // clear input filed after given value
    inputWithdraw.value = "";
    // Minus money in Main balance after withdraw amount
    const mainBalance = document.getElementById("main-balance");
    const mainBalanceAmount = parseFloat(mainBalance.innerText);
    mainBalance.innerText = mainBalanceAmount - getInputWithdraw;
})