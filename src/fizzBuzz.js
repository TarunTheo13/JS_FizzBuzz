class FizzBuzz {
  check(num){
    if (this._isDivisibleByThree(num) && this._isDivisibleByFive(num)) {
      return "FizzBuzz";
    } else if(this._isDivisibleByFive(num)) {
      return "Buzz";
    } else if (this._isDivisibleByThree(num)) {
      return "Fizz";
    } else {
      return num;
    };
  };

  _isDivisibleByThree(num){
    return num % 3 === 0; 
  };

  _isDivisibleByFive(num){
    return num % 5 === 0; 
  };

};