// ---------- CHAPTER (6,7,8,9) ---------- //
// (Answer 1)
// let a = 10;
// console.log("The value of a is: " + a);
// console.log("The value of ++a is: " + ++a);
// console.log("Now the value of a is: " + a);
// console.log("The value of a++ is: " + a++);
// console.log("Now the value of a is: " + a);
// console.log("The value of --a is: " + --a);
// console.log("Now the value of a is: " + a);
// console.log("The value of a-- is: " + a--);
// console.log("Now the value of a is: " + a);

// (Answer 2)
// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;
// console.log("a is " + a);
// console.log("b is " + b);
// console.log("result is " + result);

// (Answer 3)
// let userName = prompt("Please enter your name:");
// if (userName !== null && userName !== "") {
//   alert("Hello, " + userName + "! Welcome to our website.");
// } else {
//   alert("Hello, anonymous! Welcome to our website.");
// }

// (Answer 4&5)
// let userInput = prompt("Enter a number to display its multiplication table:");
// let number = parseInt(userInput);
// if (number) {
//   document.write("<h2>Multiplication Table for " + number + "</h2>");
//   for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     document.write(number + " x " + i + " = " + result + "<br>");
//   }
// } else {
//   document.write("<h2>Multiplication Table for 5 (Default)</h2>");
//   for (let i = 1; i <= 10; i++) {
//     let result = 5 * i;
//     document.write(`5 x   ${i} =${result}  <br>`);
//   }
// }

// (Answer 6)
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");
// let totalMarks = 100;
// let obtainedMarks1 = parseFloat(
//   prompt("Enter obtained marks for " + subject1 + ":")
// );
// let obtainedMarks2 = parseFloat(
//   prompt("Enter obtained marks for " + subject2 + ":")
// );
// let obtainedMarks3 = parseFloat(
//   prompt("Enter obtained marks for " + subject3 + ":")
// );
// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
// console.log("Result");
// console.log(
//   "Subject 1: " + subject1 + "Obtained Marks: " + obtainedMarks1 + ""
// );
// console.log(
//   "Subject 2: " + subject2 + "Obtained Marks: " + obtainedMarks2 + ""
// );
// console.log(
//   "Subject 3: " + subject3 + "Obtained Marks: " + obtainedMarks3 + ""
// );
// console.log(
//   "Total Marks: " +
//     totalMarks * 3 +
//     "Obtained Marks: " +
//     totalObtainedMarks +
//     "Percentage: " +
//     percentage.toFixed(2) +
//     "%"
// );

// --------------------------------------------------------------------------------------------------------------

// ---------- CHAPTER (9,10,11) ---------- //

// (Answer 1)
// let input = prompt("Enter Your City Name");
// if (input.toLowerCase() === "karachi") {
//   alert("welcome to city of lights!");
// } else {
//   alert("welcome to " + input);
// }

// (Answer 2)
// let gender = prompt("Enter Gender");
// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma’am");
// } else {
//   alert("wrong gender");
// }

// (Answer 3)
// let signalColor = prompt(
//   "Enter the color of the traffic signal (Red, Yellow, or Green):"
// );
// signalColor = signalColor.toLowerCase();
// let message = "";
// switch (signalColor) {
//   case "red":
//     message = "Must Stop";
//     break;
//   case "yellow":
//     message = "Ready to move";
//     break;
//   case "green":
//     message = "Move now";
//     break;
//   default:
//     message = "Invalid signal color";
//     break;
// }
// if (message !== "Invalid signal color") {
//   alert("Signal color: " + signalColor + "\nMessage: " + message);
// } else {
//   alert("Invalid signal color. Please enter Red, Yellow, or Green.");
// }

// (Answer 4)
// let remainingFuel = parseFloat(
//   prompt("Enter the remaining fuel in your car (in liters):")
// );
// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car.");
// } else {
//   alert("You have enough fuel in your car.");
// }

// (Answer 5)
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// (Answer 6)
// let subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// let subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// let subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// let totalMarks = parseFloat(prompt("Enter total marks:"));
// let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// let percentage = (totalObtainedMarks / totalMarks) * 100;
// let grade = "";
// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage < 60) {
//   grade = "Fail";
// }
// if (grade == "A+") {
//   alert("Excellent Your Grade is A one " + percentage + "%");
// } else if (grade == "A") {
//   alert("Good Your Grade is A " + percentage + "%");
// } else if (grade == "B") {
//   alert("You Need To Improve Your Grade is B " + percentage + "%");
// } else {
//   alert("Sorry Fail " + percentage + "%");
// }

// (Answer 7)
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Sorry, you guessed wrong. The secret number was " + secretNumber);
// }

// (Answer 8)
// let number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//   alert(number + " is divisible by 3.");
// } else {
//   alert(number + " is not divisible by 3.");
// }

// (Answer 9)
// let number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//   alert(number + " is an odd number.");
// }

// (Answer 10)
// let temperature = parseFloat(
//   prompt("Enter the temperature in degrees Celsius:")
// );
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's freezing cold!");
// }

// (Answer 11)
// let nums1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, or %):");
// let result;
// if (operation === "+") {
//   result = nums1 + num2;
// } else if (operation === "-") {
//   result = nums1 - num2;
// } else if (operation === "*") {
//   result = nums1 * num2;
// } else if (operation === "/") {
//   if (num2 !== 0) {
//     result = nums1 / num2;
//   } else {
//     alert("Division by zero is not allowed.");
//   }
// } else if (operation === "%") {
//   result = nums1 % num2;
// } else {
//   alert("Invalid operation. Please enter +, -, *, /, or %.");
// }
// if (typeof result !== "undefined") {
//   alert("Result: " + result);
// }

// --------------------------------------------------------------------------------------------------------------

// ---------- CHAPTER (12,13) ---------- //

// (Answer 1)
// let input = prompt("Enter a character (number or letter):");
// let charCode = input.charCodeAt(0);
// if (!isNaN(input)) {
//   alert(input + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//   alert(input + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//   alert(input + " is a lowercase letter.");
// } else {
//   alert("Invalid input. Please enter a number or a letter.");
// }

// (Answer 2)
// let nums1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));
// if (nums1 === num2) {
//   alert("Both integers are equal.");
// } else if (nums1 > num2) {
//   alert(nums1 + " is larger than " + num2 + ".");
// } else {
//   alert(num2 + " is larger than " + nums1 + ".");
// }

// (Answer 3)
// let number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//   alert(number + " is a positive number.");
// } else if (number < 0) {
//   alert(number + " is a negative number.");
// } else {
//   alert("The number is zero.");
// }

// (Answer 4)
// let character = prompt("Enter a character (a single letter):");
// character = character.toLowerCase();
// if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   alert(character + " is a vowel.");
// } else {
//   alert(character + " is not a vowel.");
// }

// (Answer 5)
// let correctPassword = "mySecretPassword";
// let enteredPassword = prompt("Enter your password:");
// if (enteredPassword === null || enteredPassword === "") {
//   alert("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }

// (Answer 6)
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// (Answer 7)
// let inputTime = parseInt(prompt("Enter the time (24-hour format):"));
// let greeting;
// if (inputTime >= 0 && inputTime < 1200) {
//   greeting = "Good morning!";
// } else if (inputTime >= 1200 && inputTime < 1700) {
//   greeting = "Good afternoon!";
// } else if (inputTime >= 1700 && inputTime < 2100) {
//   greeting = "Good evening!";
// } else if (inputTime >= 2100 && inputTime < 2400) {
//   greeting = "Good night!";
// } else {
//   greeting = "Invalid time input.";
// }
// alert(greeting);

// --------------------------------------------------------------------------------------------------------------

// ---------- CHAPTER (14,15,16) ---------- //

// (Answer 1)
// let studentNames = [];

// (Answer 2)
// let array = [{}];

// (Answer 3)
// let stringsArray = ["apple", "banana", "cherry", "date"];

// (Answer 4)
// let numbersArray = [1, 2, 3, 4, 5];

// (Answer 5)
// let booleanArray = [true, false, true, true, false];

// (Answer 6)
// let mixedArray = ["apple", 42, true, "banana", false, 7];

// (Answer 7)
// let qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];

// for (let i = 0  ; i < qualifications.length; i++) {
//   console.log(i + qualifications[i]);
// }

// (Answer 8)
// let studentNames = ["Michael", "John", "Tony"];
// let scores = [320, 230, 480];
// for (let i = 0; i < studentNames.length; i++) {
//     let studentName = studentNames[i];
//     let score = scores[i];
//     let totalMarks = 500;
//     let percentage = (score / totalMarks) * 100;

//     document.write("Score of " + studentName + " is " + score + ". Percentage: " + percentage + "%<br>");
// }

// (Answer 9)
// Initialize an array with color names
let colors = ["Red", "Green", "Blue"];
document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
document.write(
  "<b>Array after adding to the beginning:</b> " + colors.join(", ") + "<br>"
);
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
document.write(
  "<b>Array after adding to the end:</b> " + colors.join(", ") + "<br>"
);
colors.unshift("Yellow", "Orange");
document.write(
  "<b>Array after adding two more colors to the beginning:</b> " +
    colors.join(", ") +
    "<br>"
);
colors.shift();
document.write(
  "<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br>"
);
colors.pop();
document.write(
  "<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br>"
);
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAddAtIndex = prompt("Enter the color to add at that index:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write(
  "<b>Array after adding a color at a specific index:</b> " +
    colors.join(", ") +
    "<br>"
);
let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
let numberOfColorsToDelete = parseInt(
  prompt("Enter the number of colors to delete:")
);
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write(
  "<b>Array after deleting color(s) at a specific index:</b> " +
    colors.join(", ") +
    "<br>"
);

// _done_
