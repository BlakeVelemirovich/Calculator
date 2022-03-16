function operate(num, operator) {
	// Addition function returns the sum of the two numbers in num array. Num[0] stores total to be used next operation
	if (operator[0] === 'plus') {
		
		total = addition(num);
		num[0] = total;
		console.log(total);
	}
	
	// Subtraction
	if (operator[0] === 'minus') {
		
		total = subtraction(num);
		num[0] = total;
		console.log(total);
	}
}

function addition(num) {
	
	return num[0] + num[1];
}

function subtraction(num) {
	
	return num[0] - num[1];
}

const numButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".operator");
let num = [null];
let oper = [null];
let total = 0;

numButtons.forEach(button => {
	button.addEventListener('click', function() {
		if (num[0] === null) {
			
			num[0] = parseInt(button.value);
			console.log(num);
		}
		else {
			
			num[1] = parseInt(button.value);
			console.log(num);
		}
	});
});

operButtons.forEach(button => {
	button.addEventListener('click', function() {
		if (oper[0] === null) {
			
			oper[0] = button.value;
			console.log(oper);
		}
		else {
			
			oper[1] = button.value;
			console.log(oper);
		}
		
		if (num.length === 2 && oper.length === 2) {
			
			operate(num, oper);
			oper.reverse();
		}
	});
});



