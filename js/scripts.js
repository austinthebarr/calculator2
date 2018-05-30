//Back end

var sum = function(number1, number2) {
	return number1+number2;
};

var difference = function(number1, number2) {
	return number1-number2;
};

var product = function(number1, number2) {
	return number1*number2;
};

var quotient = function(number1, number2) {
	return number1/number2;
};

//Front end
//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));

$(document).ready(function(){
	$("form#sum").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("input#sum1").val());
		var number2 = parseInt($("input#sum2").val());
		var result= sum(number1,number2);
		$("#output").text(result);
	});
});
