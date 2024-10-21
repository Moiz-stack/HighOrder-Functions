# JavaScript Array and Higher-Order Function Exercises

## 💻 Exercises: Level 1

```js
const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const names = ['Ahmed', 'Hassan', 'Fatima', 'Ayesha']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'apple', price: 3 },
  { product: 'orange', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'dates', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```


## Questions:

1. **What's the difference between `forEach`, `map`, `filter`, and `reduce`?**
   - Explain the purpose of each method and how they behave when working with arrays.

2. **Define a callback function** before using it in `forEach`, `map`, `filter`, or `reduce`.
   - Create a simple function that can be used with these higher-order functions.

3. **Use `forEach` to log each country** in the `countries` array.
   - Loop through the countries array and print each country to the console.

4. **Use `forEach` to log each name** in the `names` array.
   - Loop through the names array and print each name.

5. **Use `forEach` to log each number** in the `numbers` array.
   - Loop through the numbers array and print each number.

6. **Use `map` to create a new array** where all country names are uppercase.
   - Convert each country name in the `countries` array to uppercase and store it in a new array.

7. **Use `map` to create an array** of the length of each country name in the `countries` array.
   - Return a new array that shows the length of each country’s name.

8. **Use `map` to square each number** in the `numbers` array.
   - Return a new array where each number is squared (e.g., 2 becomes 4).

9. **Use `map` to make all names uppercase** in the `names` array.
   - Change each name in the `names` array to uppercase and store them in a new array.

10. **Use `map` to return only the prices** from the `products` array.
    - Create a new array that returns the price of each product.

11. **Use `filter` to get countries** that have "stan" in their name.
    - Filter out and return only the countries that contain "stan" in their name.

12. **Use `filter` to get countries** with six characters.
    - Return only the countries that have exactly six characters in their name.

13. **Use `filter` to get countries** with six or more letters.
    - Return the countries that have six or more letters in their name.

14. **Use `filter` to get countries** that start with the letter "S."
    - Return only the countries that start with the letter "S."

15. **Use `filter` to return products** with valid prices.
    - Filter out and return products that have a valid price.

16. **Create a function** called `getStringLists` that takes an array and returns only the strings.
    - Write a function that returns an array with only string values.

17. **Use `reduce` to add up all the numbers** in the `numbers` array.
    - Add all the numbers in the numbers array using reduce.

18. **Use `reduce` to join all the countries** into a sentence.
    - Combine all the country names into one sentence like this: "Pakistan, Turkey, Saudi Arabia, Iran, and Afghanistan are Muslim-majority countries."

19. **What's the difference between `some` and `every`?**
    - Explain how `some` checks if at least one element meets a condition, and `every` checks if all elements meet a condition.

20. **Use `some` to check if any names are longer than six letters** in the `names` array.
    - Return true if any name in the `names` array is longer than 6 characters.

21. **Use `every` to check if all the countries contain the word "stan."**
    - Return true only if all the countries in the `countries` array have "stan" in their name.

22. **What's the difference between `find` and `findIndex`?**
    - Explain how `find` returns the first element that matches the condition, and `findIndex` returns the position of that element.

23. **Use `find` to get the first country** with six letters in the `countries` array.
    - Find and return the first country with exactly six letters.

24. **Use `findIndex` to get the position** of the first country with six letters in the `countries` array.
    - Return the position of the first country that has six letters.

25. **Use `findIndex` to get the position of `Iran`** in the array. If it's not there, return -1.
    - Check if "Iran" exists in the `countries` array and return its position. If it doesn’t exist, return -1.

26. **Use `findIndex` to get the position of `India`** in the array. If it's not there, return -1.
    - Check if "India" exists in the `countries` array and return its position. If it doesn’t exist, return -1.
