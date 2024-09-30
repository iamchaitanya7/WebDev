a = "Dialog Box Types and Usages"
console.log(a)

// console.log("Alert DialogBox")
// let alt = alert("Hello There.....Welcome")
// console.log(alt)

// console.log("Confirm DialogBox")
// let con = confirm("Do You Want to Proceed..!")
// if (!con) {
//     window.location.href = "/JBK/html/cancel.html"
// }

console.log("Prompt DialogBox")
let choice = prompt("Enter a Choice...!")

switch (choice.toLowerCase()) {
    case "mon": 
        document.getElementById("head2").innerHTML = "Hello Today is Monday..!"
        break;
    case "tue":
        document.getElementById("head2").innerHTML = "Hello Today is Tuesday..!"
        break;
    case "wed":
        document.getElementById("head2").innerHTML = "Hello Today is Wednesday..!"
        break;
    case "thu":
        document.getElementById("head2").innerHTML = "Hello Today is Thursday..!"
        break;
    case "fri":
        document.getElementById("head2").innerHTML = "Hello Today is Friday..!"
        break;
    case "sat":
        document.getElementById("head2").innerHTML = "Hello Today is Saturday..!"
        break;
    case "sun":
        document.getElementById("head2").innerHTML = "Hello Today is Sunday..!"
        break;
    default:
        document.getElementById("head2").innerHTML = "Enter a Valid Day..!"
        break;
}