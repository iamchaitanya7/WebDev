# HTML Notes
## 19-09-2024 Thursday

### HTML Basics

* HTML is used to display data on web page.
* HTML is tag based language.

------------------------
## 20-09-2024 Friday

### HTML Tags and Attributes

* Value of Attributes can be written inside " " or ' ' or No Quote.
* `<form>` tag is used to collect data from user.
* `<input>` tag is used to collect input form user.
* Type Attribute from `<input>` tag, where its default Value is "text" and further we can change it accordingly to our usage.
* `<select>` tag/element is used to create ComboBox.
* `<option>` tag/element provides various options; It has Value and Text; By default Value and Text are Same.

### Query String

* URL of Function ? queryString along with data.
* User's Data; Client's Data; Browser's Data.
* This Data is Given to Server Side Function.

#### Example Query String

```
http://127.0.0.1:5500/processData
? userName=Chaitanya
& passWord=123456
& mobileNo=9876543210
& emailId=xyz%40gmail.com
& gender=male&java=java
& date=2024-09-20
& submit=Submit
```
----------------------
## 23-09-2024 Monday

### HTML Tags

* `<pre>` Tag is used to Preserve or Display the Data as it is without any new formatting.
* `<pre>` Tag forces browser to preserve formatting.
* Comments in HTML are given using `<!-- Comment -->`
* `<div>` Tag is used to group different HTML elements together.
* `<nav>` Navigation Tag is used to group links together.

----------------------
## 24-09-2024 Tuesday

### HTML Tags

* `<meta>` Tag is used to store the meta data of means used to specify character set, page description, keywords, authors of the document, and viewport settings.
* Metadata will not be displayed on the page.
* `<meta>` Tag is always written inside of `<head>` Tag in the document.
* Metadata is used by the browsers (how to display the content or reload page), search engines (keywords), 
* `<meta http-equiv = "refresh" content = "3>` Tag and this mentioned attribute can be used to automatically refresh the page after a specified interval of time. 
* Content attribute is used to instruct the browser to refresh the browser after every "3" sec.
* `<meta>` tag provides more information of the webpage like author of webpage, search keywords, page description, character set, etc.
* Setting the viewport to make your website look good on all devices.

### Javascript 

* Javascript is a `Scripting` language also a `Dynamically typed` language.
* Its complied and debugged using the browser itself.
* Variables in the Javascript doesnt require defination of its datatypes.
* Variables in Javascript are declared using the `var` keyword.
* Example of declaring the `variables` in Javascript :
```
var a = 10;
var b = 99.99;
var str = "Hello";
```
* Functions in Javascript are declared using the `function` keyword.
* Example of declaring the `function` in Javascript :
```
function display(){
    //Executable Code;
}
```
* Javascript code is written inside the `<script>` tag in the document.
* Example a Basic Javascript program.
```
<!-- Declaring a Basic Display Function in JavaScript -->
<script>
    function display(){
        console.log("Hello World");
    }
    //Calling the Display() function.
    display();
</script>
```

* `setInterval()` function takes `two` arguements, where first is function name to be called, and second is delay in milliseconds (ms).
* While passing the `function name` to the `setInterval()` function we just need to pass the `function name without parenthesis()`.

* `===` Operator Checks the Type and Value both, of the specified variable.
* `==` Operator Checks Only the value of the specified variable.
```
var i = 10;
alert (i == 10); 
//returns true is only if the value of variable matches.

alert (i === 10);
//returns true is only if the value and type of variable matches.
```

----------------------
## 25-09-2024 Wednesday

### HTML Tags Shortcuts

* `ol>li*50(n)` Used to create n no of list elements.
* `Alt + Shift + S` to wrap text in Vscode.


----------------------
## 26-09-2024 Thursday

### Javascript

* `Variables` in Javascript can be declared using `var, let, cosnt`.
* `DataTypes` in Javascript are as follows:
```
1. Number
2. String
3. Object
4. Boolean
5. Array
6. Undefined
```
* `DOM Manipulation`

----------------------
## 27-09-2024 Friday

### Javascript and DOM Manipulation

* Types of Loop in Javascript:
```
1. For Loop.
2. For-In Loop. (var in arrayName) 
    {} returns index of elements/values of Array
3. For-Of Loop. (var of arrayName) 
    {} returns values of Array.
4. For-Each Loop.
5. For-Await-Of Loop
```

----------------------
## 30-09-2024 Monday

### Javascript and DOM Manipulation

* Dialog Box using Javascript