var assert = require('assert');



describe('When I want to convert arabic numbers to roman numerals',function(){
	it('and that number is 1',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(1);
		assert.equal(romanNumeral,'I');
	});
});

var RomanNumeralGenerator = function(){
	return{
		generate: function(){
			return 'I';
		}
	};
};