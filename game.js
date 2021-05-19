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
        answer:2
    },
    {
        question:"origin country of coronavirus ?",
        choice1:"China",
        choice2:"Russia",
        choice3:"United States	",
        choice4:"india",
        answer:1
    },

    {
        question:"what is the full form of html ?",
        choice1:"hyper text markup language",
        choice2:"hyper text mark language",
        choice3:"hyper tune markup lol",
        choice4:"high text make language",
        answer:1
    },

    {
        question:"who created the social sites facebook ?",
        choice1:"bill gates",
        choice2:"Mark Zuckerberg",
        choice3:"elon musk",
        choice4:"jeff bezos",
        answer:2
    },

    {
        question:"who is the lead actor of 3idiots ?",
        choice1:"Boman Irani",
        choice2:"Kareena Kapoor",
        choice3:"R. Madhavan",
        choice4:"Aamir Khan",
        answer:4
    },

    {
        question:"the height of mount everest",
        choice1:"8,894 m",
        choice2:"8,984 m",
        choice3:"8,849 m",
        choice4:"8,489 m",
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
        },1000);
    });
});
incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;
}


startGame();






