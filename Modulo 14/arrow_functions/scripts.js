const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá " + name + "!";
  } else {
    return "Olá";
  }
};

console.log(greeting("Richard"));
console.log(greeting());

const testeArrow = () => console.log("Testou!");

testeArrow();

const user = {
  name: "Richard",
  sayUserName() {
    var self = this;

    setTimeout(function () {
      console.log(self);
      console.log("UserName: " + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this.name);
      console.log("UserName: " + this.name);
    }, 700);
  },
};

user.sayUserName();
user.sayUserNameArrow();
