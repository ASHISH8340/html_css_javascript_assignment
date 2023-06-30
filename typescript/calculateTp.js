function calculateTotalPrice(products) {
    var totalPrice = products.reduce(function (accumulator, product) {
        return accumulator + product.price;
    }, 0);
    return totalPrice;
}
var products = [
    { name: 'smartphone', price: 50000 },
    { name: 'TV', price: 30000 },
    { name: 'Bike', price: 100000 },
];
var totalPrice = calculateTotalPrice(products);
console.log(totalPrice); // Output: 60
