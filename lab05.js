function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it! The number was " + whatNumber + ".");
    } else {
        $("#output").html("Noooooope! The number was " + whatNumber + ".");
    }
}

$("#good-button").click(function () {
    // Generate random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    // Call the function with the random number
    askNumber(randomNumber);
});