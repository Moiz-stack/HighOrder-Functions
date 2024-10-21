const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const names = ['Ahmed', 'Hassan', 'Fatima', 'Ayesha']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array=[1,2,4,"HELLO"]
const products = [
  { product: 'apple', price: 3 },
  { product: 'orange', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'dates', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Create a function called getStringLists that takes an array and returns only the strings.

// Write a function that returns an array with only string values.


function getStringLists(array){
    return array.filter((element)=>{
        return typeof element === 'string'
    })
}

console.log(getStringLists(array))