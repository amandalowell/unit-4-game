// var pink crystal
var pink = 0;
// var blue crystal 1-12
var blue = 0;
// var yellow crystal 1-12
var yellow = 0;
// var green crystal 1-12
var green = 0;

//var wins set to 0 (++)
var wins = 0;
// var losses set to 0 (++)
var losses = 0;

//var random numner set 19-120
var randomNumber;
// var your total score 0 
var totalScore = 0;

//function to generate random number within given range
function generateRandomNumber(lowRange,highRange){
    // generate random # between 0-1, multiply that by high range - low range, add low range back
    // not set to any set of numbers, use for both
    return Math.floor(Math.random() * highRange - lowRange) + lowRange;
}
//console.log(generateRandomNumber(25, 85));//

function startGame(){
    randomNumber = generateRandomNumber(19,120);
    totalScore = 0;
    pink = generateRandomNumber (1,12);
    //set all crystals^
}
//add jq tag 
$("#pinkCrystal").click(function(){
    totalScore = totalScore + pink;
})

// function start / restart game, all numbers set to 0, reset numbers
//functions for when each crystal is cliked add "this " random numeber diff functions for each crystal
//funtion to check if game is over 

//call start game after a win to restart game to get random number