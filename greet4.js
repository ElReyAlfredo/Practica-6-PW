module.exports = function Greetr() {
  this.greeting = "Hello from the function constructor greet4";
  this.greet = function () {
    console.log(this.greeting);
  };
};

//Con esto podemos crear otra direccion de memoria siempre y cuando yo la necesite
