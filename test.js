class Calculator {
    constructor() {
        this.num1 = 0;
        this.num2 = 0;
    }
  
    inputNumbers(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
  
    add() {
        return this.num1 + this.num2;
    }
  
    subtract() {
        return this.num1 - this.num2;
    }
  
    multiply() {
        return this.num1 * this.num2;
    }
  
    divide() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return 'Error: Division by zero is not allowed';
        }
    }
  }
  
  const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from Calculator.js
  
  describe('Calculator', () => {
      let calculator;
  
      beforeEach(() => {
          calculator = new Calculator();
      });
  
      test('add() should return the sum of two numbers', () => {
          calculator.inputNumbers(5, 7);
          expect(calculator.add()).toBe(12);
      });
  
      test('add() should work with negative numbers', () => {
          calculator.inputNumbers(-5, -7);
          expect(calculator.add()).toBe(-12);
      });
  
      test('add() should work with zero', () => {
          calculator.inputNumbers(0, 7);
          expect(calculator.add()).toBe(7);
      });
  });
  
  // Usage
  let calculator = new Calculator();
  calculator.inputNumbers(10, 5);
  console.log('Addition: ' + calculator.add());
  console.log('Subtraction: ' + calculator.subtract());
  console.log('Multiplication: ' + calculator.multiply());
  console.log('Division: ' + calculator.divide());
  //dsadjka