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

	it('and that number is 50 then the roman is L',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(50);
		assert.equal(romanNumeral,'L');
	});

	it('and that number is 40 then the roman is XL',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(40);
		assert.equal(romanNumeral,'XL');
	});

	it('and that number is 100 then the roman is C',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(100);
		assert.equal(romanNumeral,'C');
	});

	it('and that number is 500 then the roman is D',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(500);
		assert.equal(romanNumeral,'D');
	});

	it('and that number is 1000 then the roman is M',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(1000);
		assert.equal(romanNumeral,'M');
	});

	it('and that number is 900 then the roman is CM',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(900);
		assert.equal(romanNumeral,'CM');
	});

	it('and that number is 400 then the roman is CD',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(400);
		assert.equal(romanNumeral,'CD');
	});
});

var RomanNumeralGenerator = function(){
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
		{arabic: 1000, roman: 'M'},
		{arabic: 900, roman: 'CM'},
		{arabic: 500, roman: 'D'},
		{arabic: 400, roman: 'CD'},
		{arabic: 100, roman: 'C'},
		{arabic: 50, roman: 'L'},
		{arabic: 40, roman: 'XL'},
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