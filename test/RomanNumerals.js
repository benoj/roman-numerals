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

	it('and that number is 20 then the roman is XX',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(20);
		assert.equal(romanNumeral,'XX');
	});
});

var RomanNumeralGenerator = function(){
	var ROMAN_NUMERALS = [
		{arabic: 10, roman: 'X'},
		{arabic: 5, roman: 'V'},
		{arabic: 1, roman: 'I'},
	];

	function generate(number){
		var romanNumeral = new RomanNumeralRepository().findClosest(number);
		if(romanNumeral){
			return romanNumeral.roman + generate(number - romanNumeral.arabic);
		}
		return '';
	}

	return{
		generate: generate
	};
};

var RomanNumeralRepository = function(){
	var ROMAN_NUMERALS = [
		{arabic: 10, roman: 'X'},
		{arabic: 5, roman: 'V'},
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
}