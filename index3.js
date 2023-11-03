var input1 = document.querySelector(".number1");
var input2 = document.querySelector(".number2");
var output = document.querySelector(".output");

function multiply() {
  event.preventDefault();
  var num1 = parseFloat(input1.value); 
  var num2 = parseFloat(input2.value); 
  output.innerHTML = (num1 * num2);
}

function divide() {
  event.preventDefault();
  var num1 = parseFloat(input1.value);
  var num2 = parseFloat(input2.value);
  if (num2 !== 0) {
    output.innerHTML = (num1 / num2);
  } else {
    output.innerHTML = "Cannot divide by zero!";
  }
}