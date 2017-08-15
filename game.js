//set counters for correct/incorrect
var incorrectCounter=0;
var correctCounter=0;
var message=""
var userName= getUserName()
var msg=""
var indexLucky

//get userName
function getUserName(){
  var userName=prompt("Dani says 'hi'. What's your name?");
  console.log("User Name: "+userName)
  document.getElementById('user-name').innerHTML=userName
  return userName;
}
//write userName

//Today's luckNumber
var luckyNumber = [5,10,15,20,25,30,35,40,45,50];
var indexLucky=prompt("Pick a number between 0-9 to get a lucky number.")
var msg = luckyNumber[indexLucky]

document.getElementById('todaysLucky').innerHTML = msg;



//create top level quiz function

function quiz(){
  /*questionOne();*/
  askQuestion("Does Dani have a cat?","no","<span class='yeppers'>  That's right, "+userName+"! Dani has one 4 month old puppy.</span>","<span class='wrong'>  Nope "+userName+", Dani has one 4 month old puppy.</span>","question-one");
  askQuestion("Was Dani born in MA?", "no","<span class='yeppers'>  That's right, "+userName+"! Dani was born in San Jose, CA.</span>","<span class='wrong'>  Nope "+userName+", Dani was born in San Jose, CA.</span>","question-two");
  askQuestion("Does Dani have a degree in Anthropology?","yes","<span class='yeppers'>  That's right, "+userName+"! Dani has a BA in Biological Anthropology from the University of California, San Diego.</span>","<span class='wrong'>  Nope, "+userName+".  Dani does have a BA in Biological Anthropology from the University of California, San Diego.</span>","question-three");
  askQuestion("BONUS: How many continents has Dani been to?","Five","<span class='yeppers'>  That's right, "+userName+"! Dani has never been to South America or Antarctica.</span>","<span class='wrong'>  Nope, "+userName+"! Dani has been to EVERY continent except for South America and Antarctica.</span>","question-four");
  // questionTwo();
  // questionThree();
  // questionFour();
  testResults();
  document.getElementById("quiz-outcome").innerHTML="Quiz Results";
}

function askQuestion(question, answer, correctMessage, wrongMessage, location) {
  console.log(">>>Asking Question: "+question);
  var response = prompt(question);
  console.log(">>>User's Response:"+response);
  if(response.toLowerCase()==answer.toLowerCase()){
    console.log("   Response is correct.");
    message="<img src=blue-check-mark-hi.png>"+correctMessage;
    correctCounter++;
  }else {
    console.log("   Response is NOT correct.");
    message="<img src=red-x-icon-hi.png>"+wrongMessage;
    incorrectCounter++
  }
  document.getElementById(location).innerHTML=message;
}


//total answered correctly.
function testResults(){
  message="All done, "+userName+". You got:<br> --"+correctCounter+" correct<br> --"+incorrectCounter+" wrong";
  console.log("answered correctly: "+correctCounter+" answered incorrectly: "+incorrectCounter);
  document.getElementById('test-results').innerHTML=message
}
function q5(){
  var questionFive = prompt("BONUS-BONUS: Can you guess my age?")
  var qFiveanswer =42
  console.log("Question Five - Pick a number. Correct answer: 42; User Input "+questionFive)
  while (qFiveanswer != questionFive){
    if (questionFive<qFiveanswer){
      questionFive = prompt("Too low! Pick another number:");
    }else {
      questionFive = prompt("Too high! Pick another number:");
    }
    console.log("Question Five - Pick a number. Correct answer: 42; User Input "+questionFive)
  } //while(qFiveanswer != questionFive)

  message ="Yay! "+userName+", 42 is the right number!";
  document.getElementById('question-five').innerHTML=message
}
