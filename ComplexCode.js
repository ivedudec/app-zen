/* Filename: ComplexCode.js
   Content: A complex JavaScript code that demonstrates various advanced concepts and techniques
*/

// Class definition for a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to compute the magnitude of a complex number
  getMagnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Method to compute the conjugate of a complex number
  getConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }
}

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Function to perform matrix multiplication
function matrixMultiplication(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const columnsA = matrixA[0].length;
  const columnsB = matrixB[0].length;

  if (columnsA !== matrixB.length) {
    throw new Error('Invalid dimensions: Cannot perform matrix multiplication');
  }

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < columnsB; j++) {
      let sum = 0;
      for (let k = 0; k < columnsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

// Utility function to generate a random integer within a specified range
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object representing a person
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Exampleville',
    country: 'USA'
  },
  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

// Create an array of complex numbers
const complexNumbers = [
  new ComplexNumber(3, 4),
  new ComplexNumber(-1, 2),
  new ComplexNumber(5, -6)
];

// Example usage of the defined functions and objects
console.log(`The sum of [1, 2, 3, 4, 5] is ${calculateSum([1, 2, 3, 4, 5])}`);
console.log(`The magnitude of ${complexNumbers[0].real} + ${complexNumbers[0].imaginary}i is ${complexNumbers[0].getMagnitude()}`);

const matrixA = [[1, 2, 3], [4, 5, 6]];
const matrixB = [[7, 8], [9, 10], [11, 12]];
console.log(`The result of matrix multiplication is:`, matrixMultiplication(matrixA, matrixB));

console.log(`Random integer between 1 and 10: ${getRandomInteger(1, 10)}`);

person.sayHello();