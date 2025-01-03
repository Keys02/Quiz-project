let testQuestions = [
    {
        question: "Who is the CEO of SpaceX?",
        optionA: "Elon Musk",
        optionB: "Sam Altman",
        optionC: "Bill Gates",
        optionD: "Jeff Bezos",
        answerKey: "Elon Musk"
    },
    {
        question: "Which of these technologies used for backend developement?",
        optionA: "CSS",
        optionB: "HTML",
        optionC: "Angular",
        optionD: "PHP",
        answerKey: "PHP"
    },    {
        question: "Who wrote the Harry Potter Series?",
        optionA: "J.K. Rowling",
        optionB: "Cal Newport",
        optionC: "Jordan Peterson",
        optionD: "Alex Harmozi",
        answerKey: "J.K. Rowling"
    },    {
        question: "Which of the following is an Object-Oriented Programming(OOP) language?",
        optionA: "JavaScript",
        optionB: "Haskell",
        optionC: "Java",
        optionD: "Python",
        answerKey: "Java"
    },    {
        question: "Who co-founded Microsoft?",
        optionA: "Mark Zuckerberg",
        optionB: "Elon Musk",
        optionC: "Bill Gates",
        optionD: "Larry Ellison",
        answerKey: "Bill Gates"
    }
]

// Track the current question and task score
let currentQuestion = 0
let testScore = 0

function createQuestion() {
    // Render questions on webpage
    $(".question-sec").html(testQuestions[currentQuestion]["question"])

    $("#options-form").html(
    `   
        <fieldset class="questions-and-answers">
            <!-- Option A -->
            <input type="radio" id="${testQuestions[currentQuestion]["optionA"]}" name="option" value="${testQuestions[currentQuestion]["optionA"]}">
            <label for="${testQuestions[currentQuestion]["optionA"]}">${testQuestions[currentQuestion]["optionA"]}</label><br>

            <!-- Option B -->
            <input type="radio" id="${testQuestions[currentQuestion]["optionB"]}" name="option" value="${testQuestions[currentQuestion]["optionB"]}">
            <label for="${testQuestions[currentQuestion]["optionB"]}">${testQuestions[currentQuestion]["optionB"]}</label><br>

            <!-- Option C -->
            <input type="radio" id="${testQuestions[currentQuestion]["optionC"]}" name="option" value="${testQuestions[currentQuestion]["optionC"]}">
            <label for="${testQuestions[currentQuestion]["optionC"]}">${testQuestions[currentQuestion]["optionC"]}</label><br>

            <!-- Option D -->
            <input type="radio" id="${testQuestions[currentQuestion]["optionD"]}" name="option" value="${testQuestions[currentQuestion]["optionD"]}">
            <label for="${testQuestions[currentQuestion]["optionD"]}">${testQuestions[currentQuestion]["optionD"]}</label><br>
        </fieldset>
        <fieldset>
            <input class="btn" type="reset" value="Reset">
            <input class="btn" type="submit" value="Next">
        </fieldset>
    `
    )
}

createQuestion()


$("#options-form").submit(function(event) {
    event.preventDefault()
    submitAnswer()
    nextQuestion()
})

function submitAnswer(){
    let selectedAnswer = $("input:radio[name='option']:checked").val()
    if(selectedAnswer == testQuestions[currentQuestion]["answerKey"]){
        console.log("Correct answer")
        testScore++
    } else {
        console.log("Wrong answer")
    }
}


function showTestResults(){
    $("#test-container").html(
        `
            <div class="test-result">
                <p>Your test score is</p>
                <p class="test-score">${testScore}</p>
            </div>
        `
    )
}

function nextQuestion(){
    currentQuestion++

    if(currentQuestion !== 5){
        createQuestion()
    } else {
        showTestResults()
    }
}