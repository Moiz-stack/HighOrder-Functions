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


// Use findIndex to get the position of India in the array. If it's not there, return -1.

// Check if "India" exists in the countries array and return its position. If it doesn’t exist, return -1.

const findIndexIndia=countries.findIndex((country)=>{
    return country==='India'
})

console.log(findIndexIndia)