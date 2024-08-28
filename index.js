const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//EJERCICIO 1
console.log("a)  Las pizzas que tengan un id impar.");

const idImpar = pizzas.filter(pizza => {
  if (pizza.id % 2 != 0){
    console.log(
    "La " + pizza.nombre + " tiene numero de id " + "impar de " + pizza.id + ".")
  }
})

//EJRECICIO 2
console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");

const menos600 = pizzas.some((pizza) => {
  return pizza.precio < 600 
})
const resultado = menos600 == true ? "Si tenemos pizzas con un valor inferior a $600." : "No tenemos pizzas con un valor inferior a $600.";
console.log(resultado)

//EJERCICIO 3
console.log("c) El nombre de cada pizza con su respectivo precio.");

pizzas.forEach(pizza => {
  console.log("La " + pizza.nombre + " tiene un valor de $" + pizza.precio + ".")
})

//EJERCICIO 4
console.log("d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad ingredientes cuyo valor es un array con ingredientes.");

const pizzaIngredientes = pizzas.map((pizza) => {
  console.log("Los ingredientes de la " + pizza.nombre + " son" + ": " + pizza.ingredientes + ".");
})



