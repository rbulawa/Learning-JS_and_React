import "./styles.css";
console.clear();

// Synchronous code - the code is executed line by line
let shoppingCart;

function orderClothes() {
  console.log("Order some clothes.");
  shoppingCart = ["Shoes", "T-shirt", "Jeans"];
  console.log("Your order is ready.");
}

orderClothes();
console.log("Pay for the order.");
console.log("Call a friend.");
console.log(`You ordered: ${shoppingCart}`);

// What if the order would take us a few seconds?
let shoppingCart2;

function orderClothes2() {
  console.warn("Order some clothes.");
  setTimeout(() => {
    shoppingCart2 = ["Sweatshirt", "Trausers", "Polo shirt"];
    console.warn("Your order is ready.");
  }, 3000);
}

orderClothes2();
console.warn("Pay for the order.");
console.warn("Call a friend.");
console.warn(`You ordered: ${shoppingCart2}`);

// But we don't want the functions to do 2 different things like making an order and receiving the order.
// We can use callbacks to separate the concerns and tasks
// Once the orderClothes() function is done, it let's us know by calling the function that we will pass to you.

function orderFood(callback) {
  setTimeout(() => {
    const order = ["🍅", "🥛", "🍟", "🥕"];
    callback(order);
  }, 3000);
}

function collectOrder(order) {
  console.warn(`You ordered ${order}`.replaceAll(",", " "));
}

orderFood(collectOrder); // We pass collectOrder() function as a callbackk to orderFood()
// It basically is like: Hey orderFood() - once you are done with your job, call the collectOrder() guy to to it's job :)
console.warn("Call a friend :)");

// Passing functions as callbacks pattern we also can see in Event Listeners:
window.addEventListener("click", function () {
  console.log("Async click event :)");
});

// We don't know when users will click on this, but whenever they do, run this code

// Or

window.addEventListener("mouseover", callback);

function callback() {
  console.log("this is callback here :)");
}

// But there is on big problem with callbacks - callback hell
// A problem that gave birth to a concept of Promises

// One callback has to wait for another callback to finish its job
/* 
  callback
    inside callback
      inside callback
        inside callback
*/

function thingToDo1(callback) {
  // Call the pizzeria
  console.error("Call the pizzeria");
  callback();
}

function thingToDo2(callback) {
  // Order the pizza
  console.error("Order the pizza");
  callback();
}

function thingToDo3(callback) {
  // Await for the delivery
  console.error("Await for the delivery");
  callback();
}

function thingToDo4() {
  // Finally eat the pizza
  console.error("Finally eat the pizza");
}

thingToDo1(() => {
  thingToDo2(() => {
    thingToDo3(() => {
      thingToDo4();
    });
  });
});

// And we created a small Piramid of Doom
// And there is ni logic in each function. As we add more to them, it get very hard to read and to follow, AND that's were Promises come in :)
