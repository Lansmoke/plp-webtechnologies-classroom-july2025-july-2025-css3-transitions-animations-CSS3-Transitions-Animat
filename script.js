// Global variable
let globalCounter = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function using local scope
function incrementCounter() {
  let localCounter = 1; // local scope
  globalCounter += localCounter;
  return globalCounter;
}

// Function to change box color dynamically
function changeBoxColor(color) {
  const box = document.querySelector(".box");
  box.style.background = color;
}

// Function for Part 2 demo
function testFunctions() {
  console.log("5 + 7 =", addNumbers(5, 7));
  console.log("Counter:", incrementCounter());
  changeBoxColor("orange");
  alert("Check the console for function outputs & see the box color change!");
}

// Function to trigger animation (Part 3)
function triggerAnimation() {
  const box = document.querySelector(".box");
  box.classList.remove("animate"); // reset
  void box.offsetWidth; // trick to restart animation
  box.classList.add("animate");
}
