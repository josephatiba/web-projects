
var input_1 = document.getElementById("input_1");

var input_2 = document.getElementById("input_2");

var addition = document.getElementById("addition");

var subraction = document.getElementById("subtraction");

var multiplication = document.getElementById("multiplication");

var division = document.getElementById("division");

var clear = document.getElementById("clear");	

var equals = document.getElementById("equals");

var output = document.getElementById("output");

var sum =  function () {
	return Number(input_1.value) + Number(input_2.value);
}

var product =  function () {
	return (Number(input_1.value) * Number(input_2.value));
}

var difference =  function () {
	return (Number(input_1.value) - Number(input_2.value));
}

var quotient = function () {
	return (Number(input_1.value) / Number(input_2.value));
}

var toZero = function () {
	input_1.value = 0;
	input_2.value = 0;
	return output.value = 0;
}

//  var result = function () {
// 	output.interText = eq
// // }

addition.onclick = function () {
	console.log(sum());
	output.innerText = sum();
}

subtraction.onclick = function () {
	console.log(difference());
	output.innerText = difference();
}

multiplication.onclick = function () {
	console.log(product());
	output.innerText = product();
}

division.onclick = function () {
	console.log(quotient());
	output.innerText = quotient();
}

clear.onclick = function () {
	input_1.innerText = toZero();
	input_2.innerText = toZero();
	output.innerText = toZero();
}


 equals.onclick = function () {
	output.innerText = output();
}
	// switch (opr) {
	// 	case "quotient":
	// 	return 
	// }

// 	quotient.value = document.getElementById("result").innerHTML; 

// }





