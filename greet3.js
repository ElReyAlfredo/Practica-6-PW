function Greetr() {
  this.greeting = "Hello from de function constructor";
  this.greet = function () {
    console.log(this.greeting);
  };
}

module.exports = new Greetr(); //Aqui es donde se expone la direccion del objeto en la memoria
