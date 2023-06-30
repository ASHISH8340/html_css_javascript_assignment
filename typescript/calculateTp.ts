interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    const totalPrice = products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  
    return totalPrice;
  }
  const products: Product[] = [
    { name: 'smartphone', price: 50000 },
    { name: 'TV', price: 30000 },
    { name: 'Bike', price: 100000 },
  ];
  
  const totalPrice = calculateTotalPrice(products);
  console.log(totalPrice); 
    