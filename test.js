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