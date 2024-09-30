// ALERT CHAPTER: 01
// Qno : 1
// What does the alert function do in JavaScript?

// Ans :
// In JavaScript, the alert() function is used to display a simple pop-up
//  dialog box with a message. It is commonly used to inform users about certain
//   events or display messages temporarily.

// Qno : 2
// Write the code to display an alert with the message "Welcome to my website!".

// Ans :
alert("Welcome to my website!");

// Qno : 3
// What happens if you capitalize the alert keyword?

// Ans :
// In JavaScript, if you capitalize the alert keyword, like Alert or ALERT,
//  it will result in an error. JavaScript is case-sensitive, meaning it distinguishes
//   between lowercase and uppercase letters. Since alert() is a predefined function and
//    must be written in lowercase, using any other capitalization will cause the browser to 
//    throw a ReferenceError, stating that the function is not defined.

// Alert("Welcome to my website!");
// This code will generate an error like:
// Uncaught ReferenceError: Alert is not defined

// Qno : 4
// Write the correct JavaScript syntax to display "Hello, world!" in an alert box.

// Ans :
// Here is the correct JavaScript syntax to display "Hello, world!" in an alert box:
alert("Hello, world!");
// When this code runs, an alert box will pop up displaying the message "Hello, world!".

// Qno : 5
// Write a JavaScript alert statement with proper formatting and explain each part of the
// code.

// Ans :
// Here’s a properly formatted JavaScript alert statement:
alert("This is a JavaScript alert!");
// Explanation of each part:
// alert:

// This is the JavaScript function that triggers a pop-up dialog box.
// It is case-sensitive and must be written in all lowercase.
// ( (Opening Parenthesis):

// This marks the beginning of the argument list for the alert() function.
// "This is a JavaScript alert!":

// This is the argument passed to the alert() function. It is a string that represents the message to be displayed in the alert box.
// The string is enclosed in double quotes (" "), but single quotes (' ') can also be used in JavaScript.
// ) (Closing Parenthesis):

// This closes the argument list of the alert() function.
// ; (Semicolon):

// This is used to terminate the statement. Although JavaScript can sometimes infer the end of a statement without it, it’s considered best practice to use semicolons for clarity and to avoid potential issues in larger codebases.
// Full Functionality:
// When this code is executed, the browser will display a modal dialog box with the message "This is a JavaScript alert!" and an "OK" button for the user to close the alert. The script pauses until the user dismisses the alert.

// VARIABLES FOR STRING CHAPTER: 02
// Qno : 6
// Write code that declares a variable message, assigns the value "Hello, world!" to
// it, and then displays an alert with that message

// Ans :
var message = "Hello, world!";
alert(message);


// Qno : 7
// Declare a variable named age, leave it undefined, then assign the value 25 to it in a
// later statement. Display an alert showing the value of age.

// Ans :
var age ;
age = (25);
alert("my age is " + age);

// Qno : 8
// Declare a variable named greeting, assign it the value "Good morning!", and then
// display it in an alert. Afterwards, change the value of greeting to "Good evening!"
// and display the new value in another alert.

// Ans :
var greetings = "good morning!";
alert (greetings);

var greetings = "good evening!";
alert (greetings);

// Qno : 9
// Create a variable called favoriteColor and assign it the value "blue". Then display
// an alert that says "My favorite color is blue" using the variable.

// Ans :
var favoriteColor = "blue";
alert("my favorite color is "  + favoriteColor);



