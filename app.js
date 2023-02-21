let greet = require("./greet1");
greet();

//Lo que sucede aqui es que se invoca como function expresion la funcion establecida en el archivo greet1.js
//let greet2 = require("./greet2").greet;
//greet2();
//Se ejecuta de igual manera pero aqui se llamo por metodo a traves de la expresion.greet
//let greet2a = require("./greet2");
//greet2a.greet();
//Sucede que es otra manera de acceder a esta, mas elegante usarlo asi por la notacion del punto, de igual manera sigue funcionando

//const greet3 = require("./greet3");
//console.log(greet3);
//greet3.greet();
//Muestra el contenido de la clase y sus metodos, tamboien lo que contiene

const { greeting } = require("./greet3");
let greet3 = require("./greet3");
greet();
greet3.greet();
greet3.greeting = "Hello from the App";

let greet3b = require("./greet3");
greet3b.greet();
//Al parecer modifica lo que esta apuntando en direccion de la memoria del objeto. Entonces mientras podamos modificar esa inyeccion de la dependencia lo demas que se utilice tambien se va a ver mutado.

const Greet4 = require("./greet4"); //constructor
let myGreet = new Greet4(); //Y ahora new esta fuera del modulo
myGreet.greet();
//Me genera correctamente la instancia
//Como no esta inyectada direcytamente tenemos memorias independientes

const greet5 = require("./greet5");
greet5.greet();
//Sucede que se ejecuta de manera correcta
greet5.jump();
greet5.run();
greet5.fly();
