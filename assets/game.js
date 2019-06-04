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
    blue = generateRandomNumber(1,12);
    yellow = generateRandomNumber(1,12); 
    green= generateRandomNumber(1,12);
    //set all crystals^
}
//add jq tag 

$("#pinkCrystal").click(function(){
    totalScore = totalScore + pink;
    checkWin();
    
})

$("#blueCrystal").click(function(){
    totalScore = totalScore + blue;
    checkWin();
    
})

$("#yellowCrystal").click(function(){
    totalScore = totalScore + yellow;
    checkWin();
    
})

$("#greenCrystal").click(function(){
    totalScore = totalScore + green;
    checkWin();
    
})

startGame(); 
checkWin();
console.log("pink", pink,"blue", blue ,"yellow", yellow, "green", green); //

// function start / restart game, all numbers set to 0, reset numbers
function checkWin(){
    if (totalScore === randomNumber) { //means they won
        wins++; 
        startGame();  //adds point to wins
    } else if (totalScore > randomNumber) { //means they loss
        losses++; //adds point to losses
        startGame();
    }
    $("#totalScore").text(totalScore);
    //update items on screen, wins, losses, randomNumber , match # with var

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#randomNumber").text(randomNumber);
}






