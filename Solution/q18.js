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


// Use reduce to join all the countries into a sentence.

// Combine all the country names into one sentence like this: "Pakistan, Turkey, Saudi Arabia, Iran, and Afghanistan are Muslim-majority countries."

const joinedCountries=countries.reduce((acc,curr)=>{
    return `${acc},${curr}`
})

console.log(typeof joinedCountries)
console.log(joinedCountries)