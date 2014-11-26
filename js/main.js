(function() {


			function Calculator(){


				var input_1 = document.getElementById("input_1");

				var input_2 = document.getElementById("input_2");

				var addition = document.getElementById("addition");

				var subraction = document.getElementById("subtraction");

				var multiplication = document.getElementById("multiplication");

				var division = document.getElementById("division");

				var clear = document.getElementById("clear");	

				var equals = document.getElementById("equals");

				var output = document.getElementById("output");

				var sign = document.getElementById("sign");

				var sum =  function () {
					return Number(input_1.value) + Number(input_2.value);
				};

				var product =  function () {
					return (Number(input_1.value) * Number(input_2.value));
				};

				var difference =  function () {
					return (Number(input_1.value) - Number(input_2.value));
				};

				var quotient = function () {
					return (Number(input_1.value) / Number(input_2.value));
				};

				var toZero = function (){
					input_1.value = "";
					input_2.value = "";
					output.innerText = "";
				};

				addition.onclick = function () {
					sign.innerText = addition.innerHTML;
					output.innerText = sum();
				};

				subtraction.onclick = function () {
					sign.innerText = subtraction.innerHTML;
					output.innerText = difference();
				};

				multiplication.onclick = function () {
					sign.innerText = multiplication.innerHTML;
					output.innerText = product();
				};

				division.onclick = function () {
					sign.innerText = division.innerHTML;
					output.innerText = quotient();
				};

				clear.onclick = function () {
					toZero();
				};
			}
		

		var CALCULATOR = new Calculator();	


})();


 





