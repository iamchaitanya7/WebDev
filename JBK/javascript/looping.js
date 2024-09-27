a = "Looping Statements Usage"
console.log(a)

fruits = ["Apple", "Mango", "Kiwi", "Grapes", "Banana"]

console.log("Typical For Loop Statement")
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]) 
}

console.log("For-In Loop Statement")
for (frts in fruits) {
    console.log(fruits[frts]) 
}

console.log("For-Of Loop Statement")
for (frt of fruits) {
    console.log(frt) 
}