// Variable declarations for my name, amount of states, and result of some math operations
let myName = "Andrew Cartwright";
const numOfStates = 50;
let smallAddition =  5 + 4;


// If-else statement determining whether or not the ASCII value of the first letter of my name is
//    before or after 'L', with an ASCII value of 76
if (myName.charCodeAt(0) > 76) {
    alert("Back of the line!");
} else {
    alert("Next!");
}


// Creates a function that makes an alert box say "Hello World"
function sayHello() {
    alert("Hello World!");
}


// Calls the `sayHello` function
sayHello();


// The function checks if a user is under 21, and if so, sends an error message
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name+ ", you aren't old enough to view this page!");
    }
}


// Call the checkAge function 4 times for testing multiple cases
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


// Creates an array of some of my favorite veggies, which we later loop through to print out to the console
myFavoriteVegetables = ["Broccoli", "Spinach", "Zucchini", "Onion"]

for (i in myFavoriteVegetables) {
    console.log("One of my favorite vegetables is:\t" + myFavoriteVegetables[i]);
}


// Creates an array of objects representing people
let people = [
    {name: "Andrew", age: 26},
    {name: "Melissa", age: 28},
    {name: "Rachel", age: 19},
    {name: "Collin", age: 17},
    {name: "Sarah", age: 26}
];


// Loops through the array of objects and passes them into the checkAge function
for (i in people) {
    checkAge(people[i].name, people[i].age);
}


// Creates a function that returns the length of a string
function getLength(str) {
    return str.length;
}


// Sets the variable to the result of the getLength function on a string and compares it to see if it's odd or even
let helloWorldLength = getLength("Hello World");

if (helloWorldLength % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}