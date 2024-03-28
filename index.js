// Helper function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Helper function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Helper function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Helper function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // Example usage of helper functions
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(2, 6)); // Output: 12
  console.log(divide(8, 2)); // Output: 4
  console.log(divide(5, 0)); // Output: Cannot divide by zero
  