console.log("The game beings!")

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"Whoo might you find at the Museum?",
        choice1: "Blathers",
        choice2: "Celeste",
        choice3: "Kicks",
        choice4: "K.K. Slider",
        answer: 1
    },
    {
        question: "What was the release date for Animal Crossing: New Horizons?",
        choice1: "4/20",
        choice2: "4/13",
        choice3: "3/20",
        choice4: "3/13",
        answer: 3
    },
    {
        question: "Which Marvel actress has been know to be an Animal Crossing fan?",
        choice1: "Scarlett Johansson",
        choice2: "Brie Larson",
        choice3: "Zoe Saldana",
        choice4: "Gwyneth Paltrow",
        answer: 2
    },
    {
        question: "When can you buy turnips?",
        choice1: "Sunday",
        choice2: "Saturday",
        choice3: "Both",
        choice4: "Neither",
        answer: 1
    },
    {
        question: "Which one is not a Nook?",
        choice1: "Tom",
        choice2: "Tommy",
        choice3: "TImmy",
        choice4: "Tim",
        answer: 4
    },
    {
    question: "Where might you find a tin can?",
        choice1: "At the junkyard",
        choice2: "In the water",
        choice3: "At Nook's Cranny",
        choice4: "Sahara sells it",
        answer: 2
    },
    {
    question: "Which villagers are at work 24 hours a day?",
        choice1: "Isabelle",
        choice2: "Blathers",
        choice3: "Both",
        choice4: "Neither",
        answer: 3
    },
    {
        question: "What does a wand allow the player to do?",
        choice1: "Relocate property",
        choice2: "Fast travel",
        choice3: "Speak to the manager",
        choice4: "Change outfits",
        answer: 4
    },
    {
        question: "Which of these items cannot grow on your island?",
        choice1: "Fruit",
        choice2: "Bells",
        choice3: "Flowers",
        choice4: "Turnips",
        answer: 4
    },
    {
        question: "Which of these characters is featured in Super Smash Bros. Ultimate?",
        choice1: "Tom",
        choice2: "Kicks",
        choice3: "Isabelle",
        choice4: "Mabel",
        answer: 3
    }
]

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html")
    };
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();
    });

});

startGame();

