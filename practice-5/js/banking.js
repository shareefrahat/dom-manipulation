//---------------Reduced Code Repitation----------------\\

//step-1 : Common Function (input value)

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //clear input field
  inputField.value = "";
  return amountValue;
}

//Step-2 : Input Field
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

//Step-3 : Update Balance

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

//Step-4 : function call with add event listener
//1-deposit call

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
      document.getElementById("error-text").style.display = "none";
    } else {
      document.getElementById("error-text").style.display = "block";
    }
  });

//2-withdraw call
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    if (withdrawAmount > 0 && withdrawAmount < balanceTotalText) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
      document.getElementById("error-text").style.display = "none";
    } else {
      document.getElementById("error-text").style.display = "block";
    }
  });

//---------Previous Module Practice Code-----------\\
/*
//Deposit Section

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositTotal = document.getElementById("deposit-total");
    const depositValue = depositInput.value;
    const depositText = depositTotal.innerText;
    const previousDeposit = parseFloat(depositText);
    const newDeposit = parseFloat(depositValue);
    const depositOutput = previousDeposit + newDeposit;
    depositTotal.innerText = depositOutput;

    //balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance + newDeposit;
    balanceTotal.innerText = newBalance;
    depositInput.value = "";
  });

//Withdraw Section

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawValue = withdrawInput.value;
    const withdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(withdrawText);
    const newWithdraw = parseFloat(withdrawValue);
    const withdrawOutput = previousWithdraw + newWithdraw;
    withdrawTotal.innerText = withdrawOutput;
    //balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance - newWithdraw;
    balanceTotal.innerText = newBalance;
    withdrawInput.value = "";
  });

  */

//------------Jhankar vai's Code---------------\\

/*// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})
*/
