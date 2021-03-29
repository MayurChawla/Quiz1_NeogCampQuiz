var readline = require('readline-sync');
//var QuestionNumberIndex = 1;
var score = 0;
var highscore;
// var highScoreBreakersObject = {
//   highScoreBreakersname : "",
//   highScoreBreakersscore : 0,
// }
var highScoreBreakersList;
var username = readline.question("Please Enter Your Name : ");
console.log("\nWelcome to Quiz " + username + "..!");
console.log("Please answer this quiz with your memory & without any help...!");
console.log("Lets See.. how much do u remember Level Zero Introduction & Video 1");
console.log("-----------------------------------------------------");
function PlayGame(index,questions,answers)
{
  var useranswer = readline.question("Q." + index + ") " + questions + "\n" + "Answer : ");
  if(useranswer.toUpperCase() == answers.toUpperCase())
  {
    score++;
    console.log("Correct..");
  }
  else
  {
    score--;
    console.log("InCorrect..!")
  }
}

var question1 = {
  questionn : "Date when the first lecture was streamed on Youtube?(DD-MM-YYYY)",
  answerr : "14-11-2020",
}

var question2 = {
  questionn : "First Lectures was/is for hardcore programmers only(true/false)?",
  answerr : "false",
}
var question3 = {
  questionn : "Tanay Pratap Works at?",
  answerr : "Microsoft",
}
var question4 = {
  questionn : "In this video does Tanay Pratap tells us about Brain.(Yes/No)?",
  answerr : "Yes",
}
var question5 = {
  questionn : "Number of exercises in video 1(ans-eg 77)?",
  answerr : "15",
}
var question6 = {
  questionn : "Anybody who has a browser has a Java Engine(true/false)?",
  answerr : "false",
}
var question7 = {
  questionn : "Tanaybhai teaches us about Object datastructure in which exercise(ans-eg 09)?",
  answerr : "12",
}
var question8 = {
  questionn : "First break in the session was for how many minutes(ans-eg 09)?",
  answerr : "05",
}
var question9 = {
  questionn : "Teachers teach bucket and ask us ocean(true/false)?",
  answerr : "true",
}
var question10 = {
  questionn : "2 + 5 = 6(true/false)?",
  answerr : "false",
}
var question11 = {
  questionn : "Where does Tanay Pratap Live?",
  answerr : "Bangalore",
}
var question12 = {
  questionn : "First Object Name?",
  answerr : "Superman",
}
var question13 = {
  questionn : "What does Neo in NeoG stand for.?",
  answerr : "new",
}
var questionsss = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13];
for(var i=0;i<questionsss.length;i++)
{
  PlayGame((i+1),questionsss[i].questionn, questionsss[i].answerr);
}
console.log("Your Score is : " + score);
if(score>=highscore)
{
  highscore = score;
  console.log("You have broken the Highscore..")
  highScoreBreakersList.add(username);
}
console.log("-------------------------------------------------------------");
console.log("-----------------Highscore Breakers--------------------------");
console.log("-------------------------------------------------------------");
for(var i=0;i<highScoreBreakersList.length;i++)
{
  console.log(highScoreBreakersList[i]);
}