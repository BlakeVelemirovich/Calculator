function operate(userNum, num, operator) {
	// Addition function returns the sum of the two numbers in num array. Num[0] stores total to be used next operation
	if (operator[0] === 'plus') {
		
		total = addition(userNum, num);
		userNum = parseInt(total);
		console.log(total);
		console.log(userNum);
	}
	
	// Subtraction
	if (operator[0] === 'minus') {
		
		total = subtraction(userNum, num);
		userNum = parseInt(total);
		console.log(total);
	}
	
	// Multiplication
	if (operator[0] === "multiplication") {
		
		total = multiplication(userNum, num);
		userNum = parseInt(total);
		console.log(total);
	}
	
	// Division
	if (operator[0] == "division") {
	    
	    total = division(userNum, num);
	    userNum = parseInt(total);
	    console.log(total);	
	}
}

function addition(userNum, num) {
	
	console.log(userNum, num);
	return userNum + num;
}

function subtraction(userNum, num) {
	
	return userNum - num;
}

function multiplication(userNum, num) {
	
	return userNum * num;
}

function division(userNum, num) {
	
	return userNum / num;
}

const numButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".operator");
let num = [null];
let oper = [null];
let total = 0;

numButtons.forEach(button => {
	button.addEventListener('click', function() {
		
		num += button.value;
		console.log(num);
		
	});
});

let userNum = null;

operButtons.forEach(button => {
	button.addEventListener('click', function() {
		if (userNum === null) {
			
			oper[0] = button.value;
			console.log(oper);
			
			userNum = parseInt(num);
			num = '';
		}
		else {
			
			oper[1] = button.value;
			console.log(oper);
		}
		
		if (oper.length === 2) {
			
			num = parseInt(num);
			operate(userNum, num, oper);
			oper.reverse();
			num = '';
		}
	});
});

