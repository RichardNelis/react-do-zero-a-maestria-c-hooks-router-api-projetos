const products = [
  { name: "Camisa", price: 19.99, category: "Roupas" },
  { name: "Fogão", price: 19.99, category: "Eletro" },
  { name: "Iphone", price: 3950.99, category: "Smartphones" },
];

console.log(products);

products.map((product) => {
  if (product.category == "Roupas") {
    product.onSale = true;
  }
});

console.log(products);
