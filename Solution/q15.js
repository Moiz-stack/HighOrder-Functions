const countries = ['Pakistan', 'Turkey', 'Saudi Arabia', 'Iran', 'Afghanistan']
const names = ['Ahmed', 'Hassan', 'Fatima', 'Ayesha']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'apple', price: 3 },
  { product: 'orange', price: 6 },
  { product: 'potato', price: '' },
  { product: 'dates', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Use filter to return products with valid prices.

// Filter out and return products that have a valid price.

const validPrice=products.filter((products)=>{
    return products.price!==''
})

console.log(validPrice)