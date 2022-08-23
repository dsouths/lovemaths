


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


/**
 * the main game "loop", called when the first script is loaded
 * and after the user's answer has been processed
 */

function runGame() {
    // Creates random numbers between 1 & 25 

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}




function checkAnswer() {

}

function calculateCorrectScore() {

}

function incrementScore() {

}

function displayAdditionQuestion() {

} 

function displaySubtractQuestion() {

}

function displayMultiplyQueston() {

}

function displayDivideQuestion() {

}