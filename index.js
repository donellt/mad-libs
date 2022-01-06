console.log('test');

// Get input from DOM and assign to variables
function myFunction() {
let adjective1 = document.getElementById("adjective1").value;
let adjective2 = document.getElementById("adjective2").value;
let noun1 = document.getElementById("noun1").value;
let noun2 = document.getElementById("noun2").value;
let plurNoun1 = document.getElementById("plurNoun1").value;
let game1 = document.getElementById("game1").value;
let plurNoun2 = document.getElementById("plurNoun2").value;

// Create an array of variable to loop for empty strings
let variableArray = [adjective1, adjective2, noun1, noun2, plurNoun1, game1, plurNoun2];

// Loop through array for empty strings
for (let i = 0; i < variableArray.length; i++) {
    if (variableArray[i].trim() === "") {
        alert("Hey! Looks like you forgot to fill in a blank...");
        return;
    }
}

// Hide form onClick and unhide completedMadLib
let formContainer = document.getElementById("formContainer");
formContainer.classList.add("hide");
let completedMadlib = document.getElementById("completedMadlib");
completedMadlib.classList.remove("hide");

// Concatenate string with variables
let completedMadLibTest = "\"A vacation is when you take a trip to some " + adjective1 + " place with your " + adjective2 + " family. Usually you go to some place that is near a/an " + noun1 + " or up a/an " + noun2 + ". A good vacation place is one where you can ride " + plurNoun1 + " or play " + game1 + " or go hunting for " + plurNoun2 + ".\"";

// Assign p element with ID of madlibTest with concatenated mad lib string
document.getElementById("madlibTest").innerHTML=completedMadLibTest;
}

// Clear cache onClick to avoid duplicate answers
function refreshPage() {
    window.location.reload(true);
}