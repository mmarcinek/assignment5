var num1 = document.getElementById("num_one");
var num2 = document.getElementById("num_two");
var calculate = document.getElementById("calculateBtn");
var ans = document.getElementById("answer");

var add = function () {
  var input1 = Number(num1.value);
  var input2 = Number(num2.value);
  var sum = input1 + input2;
  ans.innerHTML = sum.toString();
}

calculate.addEventListener("click", add)

