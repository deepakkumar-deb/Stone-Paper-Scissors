let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const Userscorepara = document.querySelector("#user-score");
const Compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "blue";

}
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        Userscorepara.innerText = userscore;
        console.log("you Win!");
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        Compscorepara.innerText = compscore;
        console.log("you lost!");
        msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}
const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);    //for random numbers between 0 to 2
    console.log(randIdx);
    return options[randIdx];
}

const playgame = (userchoice) => {
    const compchoice = genCompchoice();
    console.log("computer Choice is: ", compchoice);

    if (userchoice == compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("user Choice is: ", userchoice);
        playgame(userchoice);
    })
});