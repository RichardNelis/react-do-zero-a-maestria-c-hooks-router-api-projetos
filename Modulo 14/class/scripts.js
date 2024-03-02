class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa", 49.99);

console.log(shirt);

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Nike", 120);

console.log(tenis.productWithDiscount(20));
