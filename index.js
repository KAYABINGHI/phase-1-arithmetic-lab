const num1 = 31;
const num2 = 2;

const multiply = num1 * num2;

// Generate a random integer greater than 0
// Math.random() gives 0 to 0.999..., multiply by 100 for a range up to 100, floor to get integer 0-99, add 1 to ensure > 0
const random = Math.floor(Math.random() * 100) + 1;

// Define num3 and num4 such that num3 % num4 = 4
const num3 = 24;
const num4 = 5;
// Create mod variable with the remainder of num3 divided by num4 (24 % 5 = 4)
const mod = num3 % num4;

// Find the highest number in a set that includes 20
// Using Math.max to find the largest value in the set
const max = Math.max(10, 15, 20, 5, 12);
// Write your code here