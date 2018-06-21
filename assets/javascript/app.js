//Set Global Variables & Arrays
var questions = [
    {question: "What is the first name of Motorhead's frontman?", choices: ["Ozzy", "Axl", "Lemmy", "Sebastian"], answer: "Lemmy"},
    {question: "Guns N' Roses released the LP, Appetite for Destruction, in what year?", choices: ["1985", "1987", "1986", "It has no official release date"], answer: "1987"},
    {question: "The mascot for the band, Iron Maiden, is named...?", choices: ["Arnold", "Eddie", "Cordelle", "Kendrick"], answer: "Eddie"}
]
var number = 30;
var intervalId;

//Define function when user clicks on start button
function startGame () {
    intervalId = setInterval(countdown, 1000);
    $(q1).show();
    $(q2).show();
    $(q3).show ();

//Run through the array of questions and display each question on the HTML page
    for (var i=0; i < questions.length; i++) {
        //set a variable for each question
        var displayQuestion = questions[i];
        var $questionDiv = $("<h3>" + question.displayQuestion + "</h3");
        
        //append questionDiv to q1 div
        $questionDiv.append($("q"+ i));

//Build the radio buttons for each question and assign a grouping ID
    for (var j=0; j < questions.choices.length; j++) {
        var $choicesDiv = $("<input-type = 'radio'>");
        $choicesDiv.attr("name", "fieldname" + i)
        $choicesDiv.attr("value", questions.choices[i]);
        $choicesDiv.addClass("text");

        $choicesDiv.appendTo($("displayQustion"+i));
        $choicesDiv.after("displayQuestion.choices[i]")
        }
    }
}
//Set Game Timer
function countdown () {
    number--;
    $("#timer").html("<h2>Time Remaining: " +  number + "Seconds </h2>");
        if (number === 0) {
            stop();
            alert("Time is Up!");
        }
}

function gameOver () {
    var answer = 0;
    var correctAnswer = 0;
    var incorrectAnswer = 0;

    for (var i = 0; i < questions.length; i++) {
        var selected = $("input[type='radio'][name='fieldName" + i + "']:checked");
        if (selected.length > 0) {
            if (selected.val() === questions[i].answer) {
                correctAnswer++;
            } else {
                incorrectAnswer++;
            }
        }    
    }
}
$("#correct").html("<span>Correct Answers: " + correctAnswer + "</span>");
$("#incorrect").html("<span>Incorrect Answers: " + incorrectAnswer + "</span>");
$("#unanswered").html("<span>Unanswered Questions: " + unanswered + "</span>");