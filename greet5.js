let greeting = "Hello form greet 5"; //Esto no es accesible desde otro lugar

let greet = () => {
  console.log(greeting);
};
let jump = () => {
  console.log(`I'm Jumping`);
};
let run = () => {
  console.log(`I'm running`);
};
let fly = () => {
  console.log(`Look mom I can Fly!`);
};
// Lo exportamos mediante un objeto
/*
module.exports = {
  greet: greet, //Si la llave y el valor, tienene el mismo nombre, pudene borrar o omitir uno
};
*/

module.exports = {
  greet,
  jump,
  run,
  fly, //Si la llave y el valor, tienene el mismo nombre, pudene borrar o omitir uno
};
