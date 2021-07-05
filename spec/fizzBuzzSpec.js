'use strict'

describe('FizzBuzz', function(){

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('when divisible by 3', function(){
    it('returns Fizz', function() {
      expect(fizzBuzz.check(3)).toEqual('Fizz');
    });
  });

  describe('when divisible by 5', function(){
    it('returns Buzz', function() {
      expect(fizzBuzz.check(5)).toEqual('Buzz');
    });
  });

  describe('when divisible by 5 & 3', function(){
    it('returns FizzBuzz', function() {
      expect(fizzBuzz.check(15)).toEqual('FizzBuzz');
    });
  });

  describe('when not divisible by 5 or 3', function(){
    it('returns original number', function() {
      expect(fizzBuzz.check(7)).toEqual(7);
    });
  });

});