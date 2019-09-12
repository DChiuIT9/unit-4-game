var randomNum = Math.floor(Math.random()*101+19);
console.log("Random Number: " + randomNum);

$("#random-text").html("Random Number: " + "<b>" + randomNum + "</b>");

var score = 0;

$("#score-text").html("Your total score is: " + "<b>" + score + "</b>");

var wins = 0;
var losses = 0;

$("#wins-text").html("Wins: " + "<b>" + wins + "</b>");
$("#losses-text").html("Losses: " + "<b>" + losses + "</b>");

var redNum = Math.floor(Math.random()*11+1);
var blueNum = Math.floor(Math.random()*11+1);
var yellowNum = Math.floor(Math.random()*11+1);
var greenNum = Math.floor(Math.random()*11+1);
console.log("Red: " + redNum);
console.log("Blue: " + blueNum);
console.log("Yellow: " + yellowNum);
console.log("Green: " + greenNum);
console.log("-------------------");

function reset() {
    randomNum = Math.floor(Math.random()*101+19);
    $("#random-text").html("Random Number: " + "<b>" + randomNum + "</b>");
    score = 0;
    $("#score-text").html("Your total score is: " + "<b>" + score + "</b>");
    redNum = Math.floor(Math.random()*11+1);
    blueNum = Math.floor(Math.random()*11+1);
    yellowNum = Math.floor(Math.random()*11+1);
    greenNum = Math.floor(Math.random()*11+1);
    console.log("Random Number: " + randomNum)
    console.log("Red: " + redNum);
    console.log("Blue: " + blueNum);
    console.log("Yellow: " + yellowNum);
    console.log("Green: " + greenNum);
    console.log("-------------------");
}

function win_lose () {
    if (randomNum === score) {
        wins++
        $("#wins-text").html("Wins: " + "<b>" + wins + "</b>");
        reset();
    }
    if (randomNum < score) {
        losses++;
        score = 0;
        $("#losses-text").html("Losses: " + "<b>" + losses + "</b>");
        reset();
    }
}