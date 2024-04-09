function calculateSalesTotals(sales) {
    return sales.map((product) => {
      const sale = product.original * (1 - (product.discount || 0)); // Calculate the sale price
      const total = sale * product.stock; // Calculate the total
  
      return {
        ...product,
        sale: sale.toFixed(2), //  sale is rounded to two decimal places
        total: total.toFixed(2), //  total is rounded to two decimal places
      };
    });
  }
  
  var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 },
  ];
  
  var result = calculateSalesTotals(sales);
  
  console.log(result);
  