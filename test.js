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
  
  const Calculator = require('./test'); // Assuming the class is exported from test.js

  describe('Calculator', () => {
      let calculator;
  
      beforeEach(() => {
          calculator = new Calculator();
      });
  
      test('add returns the sum of two numbers', () => {
          calculator.num1 = 5;
          calculator.num2 = 3;
          expect(calculator.add()).toBe(8);
      });
  
      test('add works with negative numbers', () => {
          calculator.num1 = -5;
          calculator.num2 = 3;
          expect(calculator.add()).toBe(-2);
      });
  
      test('add works with zero', () => {
          calculator.num1 = 0;
          calculator.num2 = 0;
          expect(calculator.add()).toBe(0);
      });
  });