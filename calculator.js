function operate(num, operator) {
	if (operator === 'plus') {
		total = addition(num);
		num[0] = total;
		console.log(total);
	}
}

function addition(num) {
	return num[0] + num[1];
}

const numButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".operator");
let num = [null];
let oper;
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
		oper = button.value;
		console.log(oper);
		
		if (num.length === 2) {
			operate(num, oper);
		}
	});
});



