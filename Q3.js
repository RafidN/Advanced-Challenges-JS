//sort array of objects storing id and price by price, high->low

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ])
)
