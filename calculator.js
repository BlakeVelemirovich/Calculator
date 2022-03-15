const numButtons = document.querySelectorAll(".number");
const operButtons = document.querySelectorAll(".operator");
let num = [null];
let oper;

numButtons.forEach(button => {
	button.addEventListener('click', function() {
		if (num[0] === null) {
			num[0] = button.value;
			console.log(num);
		}
		else {
			num[1] = button.value;
			console.log(num);
		}
	});
});

operButtons.forEach(button => {
	button.addEventListener('click', function() {
		oper = button.value;
		console.log(oper);
	});
});



