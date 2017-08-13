//set counters for correct/incorrect
var incorrectCounter=0;
var correctCounter=0;
var message=""
var userName= getUserName()

//get userName
function getUserName(){
  var userName=prompt("Dani says 'hi'. What's your name?");
    console.log("User Name: "+userName)
    document.getElementById('user-name').innerHTML=userName
      return userName;
  }
  //write userName


//create top level quiz function

function quiz(){
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  testResults();
  document.getElementById("quiz-outcome").innerHTML="Quiz Results";
}

  //Q1 - Pets
function questionOne(){
  var q1 = prompt("Does Dani have a cat?","yes/no");
  console.log("Question One - Does Dani Have a cat? User Input: "+q1)
  if (q1 == "yes" || q1 =="Yes" || q1 == "YES"){
    message ="<span class='wrong'>--Question One: Nope "+userName+", Dani has one 4 month old puppy.</span>";
    console.log("--answered incorrectly");
    incorrectCounter++;
  }

  else {
    message ="<span class='yeppers'>--Question One: That's right, "+userName+"! Dani has one 4 month old puppy.</span>";
    console.log("--answered correctly");
    correctCounter++;
  }
  document.getElementById('question-one').innerHTML=message
}

//Q2 - place of birth
function questionTwo(){
      var q2 = prompt("Was Dani born in MA?", "yes/no");
    console.log("Question Two - Was Dani born in MA? User Input: "+q2)
    if (q2 == "yes" || q2 == "Yes" || q2 =="YES") {
      console.log("--answered incorrectly")
      message ="<span class='wrong'>--Question Two: Nope "+userName+", Dani was born in San Jose, CA.</span>";
      incorrectCounter++;
    } else {
      console.log("--answered correctly")
      message ="<span class='yeppers'>--Question Two: That's right, "+userName+"! Dani was born in San Jose, CA.</span>";
      correctCounter++;
    }
    document.getElementById('question-two').innerHTML=message
  }

  //Q3 - education
function questionThree(){
  var q3 = prompt("Does Dani have a degree in Anthropology?", "yes/no");
      console.log("Question Three - Does Dani have a degree in Anthropology? User Input: "+q3);
      if (q3 == "yes" || q3 == "Yes" || q3 =="YES") {
        console.log("--answered correctly");
        correctCounter++;
        message="<span class='yeppers'>--Question Three: That's right, "+userName+"! Dani has a BA in Biological Anthropology from the University of California, San Diego.</span>";
      } else {
        console.log("--answered incorrectly")
        message="<span class='wrong'>--Question Three: Nope, "+userName+".  Dani does have a BA in Biological Anthropology from the University of California, San Diego.</span>";
        incorrectCounter++;
      }
      document.getElementById('question-three').innerHTML=message
    }

//Q4 - education
//Compare answers to correct answer of 5.
  function questionFour(){
    var q4 = prompt("BONUS: How many continents has Dani been to?");
    console.log("Question Four - How many continents has Dani been to? User Input: "+q4)
    if (q4 == "5" || q4 == "five") {
      console.log("--answered correctly");
      correctCounter++;
      message="<span class='yeppers'>--Question Four: That's right, "+userName+"! Dani has never been to South America or Antarctica.</span>";
    } else if (q4<5) {
      console.log("--answered incorrectly")
      message ="<span class='wrong'>--Question Four: Nope, "+userName+"! Dani has been to EVERY continent except for South America and Antarctica.</span>";
      incorrectCounter++;
    }
      else {
      console.log("--answered incorrectly")
      message="<span class='wrong'>--Question Four: Nope, "+userName+"! Dani has only been to 5 continents.</span>";
      incorrectCounter++;
    }
    document.getElementById('question-four').innerHTML=message
  }

//total answered correctly.
function testResults(){
  message="All done, "+userName+". You got:<br> --"+correctCounter+" correct<br> --"+incorrectCounter+" wrong";
  console.log("answered correctly: "+correctCounter+" answered incorrectly: "+incorrectCounter);
  document.getElementById('test-results').innerHTML=message
}
function q5(){
var questionFive = prompt("BONUS-BONUS: Pick a number:")
var qFiveanswer =25
console.log("Question Five - Pick a number. Correct answer: 25; User Input "+questionFive)
while (qFiveanswer != questionFive){
  if (questionFive<qFiveanswer){
    questionFive = prompt("Too low! Pick another number:");
  }else {
    questionFive = prompt("Too high! Pick another number:");
  }
  console.log("Question Five - Pick a number. Correct answer: 25; User Input "+questionFive)
} //while(qFiveanswer != questionFive)

  message ="Yay! "+userName+", 25 is the right number!";
  document.getElementById('question-five').innerHTML=message
}
