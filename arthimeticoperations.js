// Function to add two numbers
function add() {
	var num1 = parseFloat(document.getElementById("input1").value);
	var num2 = parseFloat(document.getElementById("input2").value);
	var result = num1 + num2;
	document.getElementById("result").value = result;
}

// Function to subtract two numbers
function subtract() {
	var num1 = parseFloat(document.getElementById("input1").value);
	var num2 = parseFloat(document.getElementById("input2").value);
	var result = num1 - num2;
	document.getElementById("result").value = result;
}

// Function to multiply two numbers
function multiply() {
	var num1 = parseFloat(document.getElementById("input1").value);
	var num2 = parseFloat(document.getElementById("input2").value);
	var result = num1 * num2;
	document.getElementById("result").value = result;
}

// Function to divide two numbers
function divide() {
	var num1 = parseFloat(document.getElementById("input1").value);
	var num2 = parseFloat(document.getElementById("input2").value);
	var result = num1 / num2;
	document.getElementById("result").value = result;
}

// Function to get remainder of two numbers
function modulo() {
	var num1 = parseFloat(document.getElementById("input1").value);
	var num2 = parseFloat(document.getElementById("input2").value);
	var result = num1 % num2;
	document.getElementById("result").value = result;
}