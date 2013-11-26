var ClosestRomanSpecification = function(){
	function isSatisfiedBy(romanNumeral,number){
		return (romanNumeral && romanNumeral.arabic <= number ); 
	}
	return{
		isSatisfiedBy:isSatisfiedBy
	};
};



module.exports = ClosestRomanSpecification;