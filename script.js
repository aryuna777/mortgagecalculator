function calculatePayment() {

var amount = document.getElementById("amount").value;
var interest = document.getElementById("interest").value;
var years = document.getElementById("years").value;
  
var monthlyInterest = interest / 100 / 12;
var payments = years * 12;
  
var x = Math.pow(1 + monthlyInterest, payments);
var monthlyPayment = (amount * x * monthlyInterest) / (x - 1);
 
monthlyPayment = monthlyPayment.toFixed(2);
  
var totalPayment = (monthlyPayment * payments).toFixed(2);
  
var totalInterest = (totalPayment - amount).toFixed(2);
  
var html = "<h2>Результаты</h2>";
    html +=
      "<p>Ежемесячный платеж: <span class='sum'>" +
      monthlyPayment +
      "</span></p>";
    html +=
      "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
    html += "<p>Переплата: <span class='sum'>" + totalInterest + "</span></p>";
  
document.getElementById("results").innerHTML = html;
  }
  
document.getElementById("loan-form").addEventListener("submit", function (e) {
    e.preventDefault();
    calculatePayment();
  });
