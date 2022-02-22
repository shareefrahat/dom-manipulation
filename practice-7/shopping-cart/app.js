// //phone case input value increment
// /*
// document.getElementById("case-plus").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-number");
//   const caseNumber = caseInput.value;
//   const parseValue = parseInt(caseNumber);
//   caseInput.value = parseValue + 1;
// });

// // phone case input value decrement

// document.getElementById("case-minus").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-number");
//   const caseNumber = caseInput.value;
//   const parseValue = parseInt(caseNumber);
//   caseInput.value = parseValue - 1;
// });
// */

// //phone case input increment and decrement using function

// function updateProductNumber(product, price, isIncreasing) {
//   const productInput = document.getElementById(product + "-number");
//   let productNumber = productInput.value;
//   if (isIncreasing) {
//     productNumber = parseInt(productNumber) + 1;
//   } else if (productNumber > 0) {
//     productNumber = parseInt(productNumber) - 1;
//   }
//   productInput.value = productNumber;

//   //product total value increment and decreament
//   const productTotal = document.getElementById(product + "-total");
//   productTotal.innerText = productNumber * price;
//   calculateTotal();
// }

// function getInputValue(product) {
//   const productInput = document.getElementById(product + "-number");
//   const productNumber = parseInt(productInput.value);
//   return productNumber;
// }

// function calculateTotal() {
//   const phoneTotal = getInputValue("phone") * 1219;
//   const caseTotal = getInputValue("case") * 59;
//   const subTotal = phoneTotal + caseTotal;
//   const tax = subTotal / 10;
//   const total = subTotal + tax;

//   //update on html
//   document.getElementById("subtotal").innerText = subTotal;
//   document.getElementById("tax").innerText = tax;
//   document.getElementById("total-price").innerText = total;
// }

// //phone increment and decrement event
// document.getElementById("phone-plus").addEventListener("click", function () {
//   updateProductNumber("phone", 1219, true);
// });

// document.getElementById("phone-minus").addEventListener("click", function () {
//   updateProductNumber("phone", 1219, false);
// });

// //case increment and decrement event

// document.getElementById("case-plus").addEventListener("click", function () {
//   updateProductNumber("case", 59, true);
// });

// document.getElementById("case-minus").addEventListener("click", function () {
//   updateProductNumber("case", 59, false);
// });
