let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const generatecompchoice = () =>{
   let option = ["rock" , "paper", "scissors"];
    const radomidx = Math.floor(Math.random()*3);
    return option[radomidx];
};

const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = "Gamw was Draw. Play Again";
    msg.style.backgroundColor ="rgb(18, 13, 81)";
};

const showWinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red";

    }
};

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
     const compchoice = generatecompchoice();
     console.log("computer choice = ", compchoice);

     if(userchoice === compchoice){
        drawgame();
     }
     else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin =  compchoice === "paper" ? false: true;
        }else if(userchoice === "paper"){
            userwin = compchoice ==="scissors" ? false:true;
        }
        else{
            userwin = compchoice ==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
     }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    });
});