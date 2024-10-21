# JavaScript Array and Higher-Order Function Exercises - Answers

## Answers:

1. **What's the difference between `forEach`, `map`, `filter`, and `reduce`?**
   - **`forEach`**: Executes a provided function once for each array element. It doesn’t return anything.
   - **`map`**: Creates a new array by applying a function to every element in the array.
   - **`filter`**: Creates a new array with only the elements that pass a condition specified by a function.
   - **`reduce`**: Executes a reducer function on each element of the array and returns a single value (e.g., sum, product, etc.).

2. **Define a callback function before using it in `forEach`, `map`, `filter`, or `reduce`.**
   ```js
   const callback = (element) => {
     console.log(element);
   };
