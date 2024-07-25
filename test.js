// JavaScript Program: Simple Calculator

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

// Main function to operate the calculator
function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            console.log("Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
            return null;
    }
}

// Example usage
console.log(calculator(10, 5, 'add')); // 15
console.log(calculator(10, 5, 'subtract')); // 5
console.log(calculator(10, 5, 'multiply')); // 50
console.log(calculator(10, 5, 'divide')); // 2
console.log(calculator(10, 0, 'divide')); // Error: Division by zero is not allowed.

const { divide } = require('./test'); // Adjust the path as necessary

describe('divide function tests', () => {
    test('dividing two positive numbers', () => {
        expect(divide(10, 5)).toBe(2);
    });

    test('dividing two negative numbers', () => {
        expect(divide(-10, -5)).toBe(2);
    });

    test('dividing a positive number by a negative number', () => {
        expect(divide(10, -5)).toBe(-2);
    });

    test('dividing a negative number by a positive number', () => {
        expect(divide(-10, 5)).toBe(-2);
    });

    test('dividing a number by zero', () => {
        expect(divide(10, 0)).toBeNull();
    });

    test('dividing zero by a number', () => {
        expect(divide(0, 5)).toBe(0);
    });

    // Optional: Test for non-numeric values if the function should handle such cases
    // test('dividing by a non-numeric value', () => {
    //     expect(divide(10, 'a')).toBeNull(); // Assuming the function should return null for invalid inputs
    // });
});