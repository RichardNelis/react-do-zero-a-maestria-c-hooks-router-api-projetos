// 1 - Var, Let e Const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log("No if A:" + x);
}

console.log("Fora do If A:" + x);

//------------------------------------------

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log("No if A:" + a);
}

console.log("Fora do If A:" + a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log("No For I:" + i);
}

console.log("Fora do For I:" + i);

//------------------------------------------

function logName() {
  const name = "Richard";

  console.log(name);
}

const name = "Beatriz";

logName();

console.log(name);
