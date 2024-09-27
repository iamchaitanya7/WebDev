a = "Hello World"
a = 45
console.log(a)

var a = 10
var b = 99.10
var c = 98765432101234567899
var d = "String"
var e = true
var f = -125
var h = null
var i;
var j = ["Hello", "Sample", "XYZ"]

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof h)
console.log(typeof i)
console.log(typeof j)

//Function for Basic DOM Manipulation used to Modify the Heading Tag of HTML Document.
function domManipluation(){
    var h = document.getElementById("head1")

    h.innerHTML= "Learning DOM Manipulation"
    h.style.backgroundColor ="Yellow"
    
    console.log("Button Press Hua...")
}

//Function for Basic DOM Manipulation used to Modify the Heading Tag of HTML Document and then vice-versa (Two Operations).
function domManipluation2(){
    var h = document.getElementById("head1")

    if (h.innerHTML=="Day-02 Linking External CSS") {
        h.innerHTML= "Learning DOM Manipulation"
        h.style.backgroundColor ="Yellow"
    } 
    else {
        h.innerHTML= "Day-02 Linking External CSS"
        h.style.backgroundColor ="darkorange"
    }    
    console.log("Button Press Hua...")
}

//Function for Basic DOM Manipulation used to Modify the Heading Tag of HTML Document and then vice-versa (Three Operations).
function domManipluation3(){
    var h = document.getElementById("head1")

    if (h.innerHTML=="Day-02 Linking External CSS") {
        h.innerHTML= "Learning DOM Manipulation"
        h.style.backgroundColor ="Yellow"        
    } 
    else if(h.innerHTML=="Learning DOM Manipulation") {
        h.innerHTML= "DOM Background Change"
        h.style.backgroundColor ="greenyellow"  
    }
    else{
        h.innerHTML= "Day-02 Linking External CSS"
        h.style.backgroundColor ="darkorange"
    }

    console.log("Button Press Hua...")

}



