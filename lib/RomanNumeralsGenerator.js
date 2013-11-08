var InvalidNumberSpecification = require('./InvalidNumberSpecification'),
	RomanNumeralRepository = require('./RomanNumeralsRepository');

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

module.exports = RomanNumeralGenerator;
