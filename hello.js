/*const sayHello  = function (name) {
  console.log("Hello, " + name);
}*/

//sayHello();

//sayHello("Caliban");
//sayHello("Miranda");
//sayHello("Ferdinand");



const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);