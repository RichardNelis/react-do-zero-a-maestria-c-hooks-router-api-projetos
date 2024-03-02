const array = [1, 2, 3, 4, 5];

console.log(array);

const highNumber = array.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log("Número filtrados: " + highNumber);

const users = [
  { name: "Richard", available: true },
  { name: "Beatriz", available: false },
  { name: "Agnaldo", available: true },
  { name: "Emilene", available: false },
];

console.log(users);

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);
