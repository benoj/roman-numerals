var assert = require('assert'),
	RomanNumeralGenerator = require('../lib/RomanNumeralsGenerator');



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

	it('and that number is 90 then the roman is XC',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(90);
		assert.equal(romanNumeral,'XC');
	});

	it('and that number is 4 then the roman is IV',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator(),
			romanNumeral = romanNumeralGenerator.generate(4);
		assert.equal(romanNumeral,'IV');
	});

	it('and that number is 0 then an error is thrown',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator();

		assert.throws(function(){
			romanNumeralGenerator.generate(0);
			},
			/Only numbers between 1 and 3999 may be converted/
		);
	})

	it('and that number is 4000 then an error is thrown',function(){
		var romanNumeralGenerator = new RomanNumeralGenerator();

		assert.throws(function(){
			romanNumeralGenerator.generate(4000);
			},
			/Only numbers between 1 and 3999 may be converted/
		);
	})

});

