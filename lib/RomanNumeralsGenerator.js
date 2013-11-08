var RomanNumeralGenerator = function(){
	var invalidNumberSpecification = new InvalidNumberSpecification();

	function generate(number){
		if(invalidNumberSpecification.isSatisfiedby(number)){
			throw new Error("Only numbers between 1 and 3999 may be converted");
		}
		return generateRoman(number);
	}

	function generateRoman(number){
		var romanNumeral = new RomanNumeralRepository().findClosest(number);
		if(romanNumeral){
			return romanNumeral.roman + generateRoman(number - romanNumeral.arabic);
		}
		return '';
	}

	return{
		generate: generate
	};
};

var InvalidNumberSpecification = function(){
	function isSatisfiedby(number){
		return (number < 1 || number > 3999);
	}
	return{
		isSatisfiedby:isSatisfiedby
	};
}

var RomanNumeralRepository = function(){
	var ROMAN_NUMERALS = [
		{arabic: 1000, roman: 'M'},
		{arabic: 900, roman: 'CM'},
		{arabic: 500, roman: 'D'},
		{arabic: 400, roman: 'CD'},
		{arabic: 100, roman: 'C'},
		{arabic: 90, roman: 'XC'},
		{arabic: 50, roman: 'L'},
		{arabic: 40, roman: 'XL'},
		{arabic: 10, roman: 'X'},
		{arabic: 5, roman: 'V'},
		{arabic: 4, roman: 'IV'},
		{arabic: 1, roman: 'I'},
	];

	function findClosest(number){
		for(var i =0; i <= ROMAN_NUMERALS.length; i++){
			var romanNumeral = ROMAN_NUMERALS[i];
			if(romanNumeral && romanNumeral.arabic <= number ){
				return romanNumeral;
			}
		}
	}

	return{
		findClosest: findClosest
	};
};

module.exports = RomanNumeralGenerator;
