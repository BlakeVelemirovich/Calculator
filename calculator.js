function operate(previousNum, num, operator) {
	// Addition function returns the sum of the two numbers in num array. Num[0] stores total to be used next operation
	if (operator[0] === 'plus') {
		
		total = addition(previousNum, num);
		updateScreen(total);
	
	}
	
	// Subtraction
	if (operator[0] === 'minus') {
		
		total = subtraction(previousNum, num);
		updateScreen(total);
	}	
	
	// Multiplication
	if (operator[0] === "multiplication") {
		
		total = multiplication(previousNum, num);
		updateScreen(total);
	}	
	
	// Division
	if (operator[0] == "division") {
	    
	    total = division(previousNum, num);
		updateScreen(total);
	}	
}

function addition(previousNum, num) {
	
	return previousNum + num;
}

function subtraction(previousNum, num) {
	
	return previousNum - num;
}

function multiplication(previousNum, num) {
	
	return previousNum * num;
}

function division(previousNum, num) {
	
	return previousNum / num;
}

function updateScreen(append) {
	
	display.textContent = append;
}

function clearScreen() {
	num = [null];
	oper = [null];
	previousNum = [null];
	total = 0;
	updateScreen('');
	}

const display = document.querySelector('.display');
const numButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".operator");
let num = [null];
let oper = [null];
let total = 0;

numButtons.forEach(button => {
	button.addEventListener('click', function() {
		
		num += button.value;
		updateScreen(num);
		
	});
});

let previousNum = null;

operButtons.forEach(button => {
	button.addEventListener('click', function() {
		if (previousNum === null) {
			
			oper[0] = button.value;
			updateScreen(oper[0]);
			
			previousNum = parseInt(num);
			num = '';
		}
		else {
			
			oper[1] = button.value;
			updateScreen(oper);
		}
		
		if (oper.length === 2) {
			
			num = parseInt(num);
			operate(previousNum, num, oper);
			oper.reverse();
			num = '';
			previousNum = total;
			updateScreen(previousNum);
		}
	});
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
	clearScreen();
});
