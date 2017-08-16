// var names = ['John', 'Paul', 'George', 'Ringo'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// //arrow functions can be used in place of an anonymous function
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// //not that much simpler, but...
// names.forEach((name) => console.log(name)); //don't need curly braces
//
// var returnMe = (name) => name + '!'; //statement automatically gets returned
// console.log(returnMe('Miguel'));
//
// //anonymous function have this binding, while arrow functions take on their parents this binding
// var person = {
//   name: 'Miguel',
//   greet: function () {
//     names.forEach((name) => {//DELETED: function (name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//*** Challenge ***
function add (a, b) {
  return a + b;
}
console.log(add(1, 3));
console.log(add(9, 0));

//addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
