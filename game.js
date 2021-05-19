const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice"));
const scoreText=document.getElementById("score"); 
let currentQuestion={};
let accept=false;
let score=0;
let questioncounter=0;
let avq=[];

let questions=[
    {
        question:"who is the last president of america ?",
        choice1:"Vladimir Putin",
        choice2:"Joe Biden",
        choice3:"Donald Trump",
        choice4:"Barack Obama",
        answer:1
    },
    {
        question:"what is the full form of html 2?",
        choice1:"<hyper text markup language>",
        choice2:"<hyper text mark language>",
        choice3:"<hyper tune markup lol>",
        choice4:"<high text make language>",
        answer:2
    },

    {
        question:"what is the full form of html 3?",
        choice1:"<hyper text markup language>",
        choice2:"<hyper text mark language>",
        choice3:"<hyper tune markup lol>",
        choice4:"<high text make language>",
        answer:3
    },
];

const CURRECT_ANS=10;
const MAX_QUESTION=questions.length;

    startGame=()=>{
        questioncounter=0;
        score=0;
        avq=[...questions];
        getNewQuestion();
    }
 



getNewQuestion=()=>{
    questioncounter++;
    const questionIndex=Math.floor(Math.random()*avq.length);
    currentQuestion=avq[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset["number"];
        choice.innerText=currentQuestion["choice"+number];
    });

    avq.splice(questionIndex,1);
    accept=true;

};

choices.forEach(choice=>{
    choice.addEventListener("click",e=>{
        if(!accept) return ;

        accept=true;
        const seletChoice=e.target;
        const selectedAnswer=seletChoice.dataset["number"];
        const answercheck=selectedAnswer==currentQuestion.answer?"correct":"incorrect";

        if(answercheck=="correct"){
           
            incrementScore(CURRECT_ANS);
        }
        seletChoice.parentElement.classList.add(answercheck);
        setTimeout(()=>{
            seletChoice.parentElement.classList.remove(answercheck);
            getNewQuestion();
        },2000);
    });
});
incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;
}


startGame();






