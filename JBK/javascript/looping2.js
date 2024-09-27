fruits = ["Apple", "Mango", "Kiwi", "Grapes", "Banana"]

console.log("For-Of Loop Statement")
for (frt of fruits) {
    console.log(frt) 
    var h = document.querySelector(".head2")
    h.innerHTML += frt
    //h.innerHTML = "Fruits List: " + fruits.join(", ")
}