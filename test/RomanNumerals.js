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

	it('and that number is 10 then the roman is X',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(10);
		assert.equal(romanNumeral,'X');
	});
});

var RomanNumeralGenerator = function(){
	var ROMAN_NUMERALS = {
		1: 'I',
		5: 'V',
		10: 'X'
	};

	function generate(number){
		return ROMAN_NUMERALS[number];
	}

	return{
		generate: generate
	};
};