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
        question: "Which of following technologies is used for backend developement?",
        optionA: "CSS",
        optionB: "HTML",
        optionC: "Angular",
        optionD: "PHP",
        answerKey: "PHP"
    },    
    {
        question: "Who wrote the Harry Potter Series?",
        optionA: "J.K. Rowling",
        optionB: "Cal Newport",
        optionC: "Jordan Peterson",
        optionD: "Alex Harmozi",
        answerKey: "J.K. Rowling"
    },    
    {
        question: "Which of the following is an Object-Oriented Programming(OOP) language?",
        optionA: "JavaScript",
        optionB: "Haskell",
        optionC: "Java",
        optionD: "Python",
        answerKey: "Java"
    },    
    {
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
        <ol>
            <fieldset>
                <!-- Option A -->
                <li>
                    <input type="radio" id="${testQuestions[currentQuestion]["optionA"]}" name="option" value="${testQuestions[currentQuestion]["optionA"]}">
                    <label for="${testQuestions[currentQuestion]["optionA"]}">A. ${testQuestions[currentQuestion]["optionA"]}</label>
                </li>

                <!-- Option B -->
                <li>
                    <input type="radio" id="${testQuestions[currentQuestion]["optionB"]}" name="option" value="${testQuestions[currentQuestion]["optionB"]}">
                    <label for="${testQuestions[currentQuestion]["optionB"]}">B. ${testQuestions[currentQuestion]["optionB"]}</label>
                </li>

                <!-- Option C -->
                <li>
                    <input type="radio" id="${testQuestions[currentQuestion]["optionC"]}" name="option" value="${testQuestions[currentQuestion]["optionC"]}">
                    <label for="${testQuestions[currentQuestion]["optionC"]}">C. ${testQuestions[currentQuestion]["optionC"]}</label>
                </li>

                <!-- Option D -->
                <li>
                    <input type="radio" id="${testQuestions[currentQuestion]["optionD"]}" name="option" value="${testQuestions[currentQuestion]["optionD"]}">
                    <label for="${testQuestions[currentQuestion]["optionD"]}">D. ${testQuestions[currentQuestion]["optionD"]}</label>
                </li>
                </fieldset>

                <div class="button-sec">
                    <input class="btn" type="reset" value="Reset">
                    <input class="btn" type="submit" value="Next">
                </div>
        </ol>
    `
    )
}

createQuestion()


$("#options-form").submit(function(event) {
    event.preventDefault()
    let selectedAnswer = submitAnswer()
    if(selectedAnswer==undefined){
        return
    } else {
        nextQuestion()
    }
})

function nextQuestion(){
    currentQuestion++

    //Check if we have reached the last question
    if(currentQuestion !== testQuestions.length){
        createQuestion()
    } else {
        showTestResults()
    }
}

function submitAnswer(){
    let selectedAnswer = $("input:radio[name='option']:checked").val()
    if(selectedAnswer == testQuestions[currentQuestion]["answerKey"]){
        testScore++
    } else {
    }
    return selectedAnswer
}

function showTestResults(){

    let template

    switch(testScore){
        case 0:
            template = `
                        <p class="test-result-message"><span style="color: tomato">Very poor 😭</span> your quiz score is</p>
                        <p class="test-score">${testScore}</p>
                        `;
                        break;
        case 1:
            template = `
                        <p class="test-result-message"><span style="color: tomato">Poor 😞</span> your quiz score is</p>
                        <p class="test-score">${testScore}</p>
                        `;
                        break;
        case 3:
            template = `
                        <p class="test-result-message"><span style="color: orange">Good 😏</span> your quiz score is</p>
                        <p class="test-score">${testScore}</p>
                        `;
                        break;
        case 4:
            template = `
                        <p class="test-result-message"><span style="color: #28A745">Very Good 🙂</span> your quiz score is</p>
                        <p class="test-score">${testScore}</p>
                        `;
                        break;
        case 5:
            template = `
                        <p class="test-result-message"><span style="color: #28A745">Good job 😍</span> your quiz score is</p>
                        <p class="test-score">${testScore}</p>
                        `;
                        break;


    }
    $("#test-container").html(`<div class="test-result">${template}</div>`)
}
