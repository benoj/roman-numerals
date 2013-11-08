var assert = require('assert');



describe('When I want to convert arabic numbers to roman numerals',function(){
	it('and that number is 1 then the roman is I',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(1);
		assert.equal(romanNumeral,'I');
	});
});

var RomanNumeralGenerator = function(){
	var ROMAN_ONE = 'I';

	function generate(){
		return ROMAN_ONE;
	}

	return{
		generate: generate
	};
};