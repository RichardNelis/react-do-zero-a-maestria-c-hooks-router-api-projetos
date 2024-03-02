const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categória ${productCategory} e é da cor ${color}`
);
