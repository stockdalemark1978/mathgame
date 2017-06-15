//if we click on the start/reset button
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
            //timeleft?
                //yes->continue
                //no--> game over
        //change button text to reset
        //generate new question with multiple answers

//if we click on answer box
    //are we playing?
        //is answer correct?
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new question and ans.
            //no
                //show try again box for 1 sec

var choiceBoxes = document.getElementsByClassName("choice");
var questionBox = document.getElementById("question");
var correctBox = document.getElementById("correct");
var wrongBox = document.getElementById("wrong");
var scoreBox = document.getElementById("scoreValue");
var timeRemainBox = document.getElementById("timeRemaining");
var timeRemainValue = document.getElementById("timeRemainingValue");
var startResetButton = document.getElementById("startReset");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var obj = [
    {"question1": "7 + 5", "answer1": "12", "answer2": "18", "answer3": "10", "answer4": "21"},
    // {question2: "9 + 22", answer1: "21", answer2: "43", answer3: "31", answer4: "19"},
    // {question3: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question4: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question5: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question6: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question7: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question8: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question9: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"},
    // {question10: "7 + 5", answer1: "12", answer2: "18", answer3: "10", answer4: "21"}
];

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
      // Initialize your application or run some code.
    
     reset();

 }
};

function reset(){
    for(var i = 0; i < choiceBoxes.length; i++){
        choiceBoxes.innerHTML = "";
    }
    questionBox.innerHTML = "";
    correctBox.style.display = "none";
    wrongBox.style.display = "none";
    scoreBox.innerHTML = "0";
    startResetButton.addEventListener("click", startGame);
}

function startGame (){
    scoreBox.innerHTML = "0";
    timeRemainBox.style.display = "block";
    startResetButton.innerHTML = "Reset Game";
    displayQuestion();
    countdown();
}

// function countdown (){
  
// }

//function gameOver()

function displayQuestion () {
    questionBox.innerHTML = obj.question1;
    
}




function countdown (){




var count=5;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){

    console.log(count);

  count=count-1;
  if (count <= 0)
  {
      startResetButton.innerHTML = "Start Game";
     clearInterval(counter);
     //counter ended, do something here
     return 
  }
timeRemainBox.innerHTML = "Time Remaining " + count + " secs";

    
  //Do code for showing the number of seconds here
}
}


// var count = 60, timer = setInterval(function() {
//     $("#counter").html(count--);
//     if(count == 1) clearInterval(timer);
// }, 1000);
