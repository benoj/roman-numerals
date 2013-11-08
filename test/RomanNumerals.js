var assert = require('assert');



describe('When I want to convert arabic numbers to roman numerals',function(){
	it('and that number is 1 then the roman is I',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(1);
		assert.equal(romanNumeral,'I');
	});

	it('and that number is 5 then the roman is V',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(5);
		assert.equal(romanNumeral,'V');
	});
});

var RomanNumeralGenerator = function(){
	var ROMAN_ONE = 'I',
		ROMAN_FIVE = 'V';

	var ROMAN_NUMERALS = {
		1: 'I',
		5: 'V'
	};

	function generate(number){
		if(number === 5){
			return ROMAN_FIVE;
		}	
		return ROMAN_NUMERALS[number];
	}

	return{
		generate: generate
	};
};