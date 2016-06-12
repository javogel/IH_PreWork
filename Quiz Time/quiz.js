
var user  = {};
var responses = [];

function question1() {
  var name = prompt('What is your name?');
  user.name = name;

}

question1();




function question2() {

  var secondQuestion = prompt('Does null === 0 ? (Yes or No)');

// In order to be able to effectively compare we make the anser lowercase
  if (secondQuestion.toLowerCase() === 'yes') {
    secondQuestion = true;
  } else if (secondQuestion.toLowerCase() === 'no') {
    secondQuestion = false;
  } else {
// If the user answers something other than yes or no we ask again.
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(secondQuestion); // add the true or false value to the responses array
}

question2();

function question3() {

  var thirdQuestion = prompt('IS Barcelona awesome? (Yes, No)');

// In order to be able to effectively compare we make the anser lowercase
  if (thirdQuestion.toLowerCase() === 'yes') {
    thirdQuestion = true;
  } else if (thirdQuestion.toLowerCase() === 'no') {
    thirdQuestion = false;
  } else {
// If the user answers something other than yes or no we ask again.
    alert("Please answer either Yes or No");
    return question3();
  }
  responses.push(thirdQuestion); // add the true or false value to the responses array
}

question3();


function question4() {

  var fourthQuestion = prompt('Are you having fun? (Yes, No)');

// In order to be able to effectively compare we make the anser lowercase
  if (fourthQuestion.toLowerCase() === 'yes') {
    fourthQuestion = true;
  } else if (fourthQuestion.toLowerCase() === 'no') {
    fourthQuestion = false;
  } else {
// If the user answers something other than yes or no we ask again.
    alert("Please answer either Yes or No");
    return question4();
  }
  responses.push(fourthQuestion); // add the true or false value to the responses array
}

question4();

function evaluate(responsesArray) {

// declare two variables to store the totals

var totals =  responsesArray


// populate the “totals” variables from the “responsesArray”

// save the “totals” variables inside the user object
user.responses = totals

// call showResults
showResults()
}

function showResults() {

console.log("The user by the name of: " + user.name + ". Had the following responses: " + user.responses)
// display the user results

}

// call the function, passing it the responses array
evaluate(responses);





