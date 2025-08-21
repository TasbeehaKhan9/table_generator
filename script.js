var userInput = +prompt("Enter a number to generate the table:");
for (var i = 1; i <= 10; i++) {
    document.write(userInput + " x " + i + " = " + (userInput * i) + "<br>");
}