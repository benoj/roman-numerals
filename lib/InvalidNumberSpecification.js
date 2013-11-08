var InvalidNumberSpecification = function(){
	function isSatisfiedby(number){
		return (number < 1 || number > 3999);
	}
	return{
		isSatisfiedby:isSatisfiedby
	};
};

module.exports = InvalidNumberSpecification;