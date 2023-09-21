let counterElement = document.getElementById("counter");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let count = 0;
function updateCounter() {
    counterElement.textContent = count;
}
addButton.addEventListener("click" , 
function() {
    count++;
    updateCounter();
});
subtractButton.addEventListener("click",
function() {
    count--;
    updateCounter();
});