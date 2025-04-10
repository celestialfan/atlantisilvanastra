const astrabutton=document.getElementById("astra");
const silvanabutton=document.getElementById("silvana");
const atlantisbutton=document.getElementById("atlantis");
const bigtext=document.getElementById("result");
const youresult=document.getElementById("youchoose");
const opponentresult=document.getElementById("opponentchoose");
const wins=document.getElementById("winmessage");
const wc=document.getElementById("wc");
let wincount1=0;
let wincount2=0;
astrabutton.addEventListener("click", () => play("astra"));
silvanabutton.addEventListener("click", () => play("silvana"));
atlantisbutton.addEventListener("click", () => play("atlantis"));
function play(chosen) {
    const options=["astra", "silvana", "atlantis"];
    const opponentchoice=options[Math.floor(Math.random()*options.length)];
    opponentresult.textContent=`Your opponent chooses ${opponentchoice}`;
    youresult.textContent=`You choose ${chosen}`;
    if (chosen==opponentchoice) {
        wins.textContent=`It's a tie!`;
    } else if((chosen=="astra" && opponentchoice=="atlantis")||(chosen=="atlantis" && opponentchoice=="silvana")||(chosen=="silvana" && opponentchoice=="astra")){
        wins.textContent=`You win! ${chosen} beats ${opponentchoice}!`;
        wincount1++;
    } else if((opponentchoice=="astra" && chosen=="atlantis")||(opponentchoice=="atlantis" && chosen=="silvana")||(opponentchoice=="silvana" && chosen=="astra")){
        wins.textContent=`Your opponent wins! ${opponentchoice} beats ${chosen}!`;
        wincount2++;
    }
    wc.textContent=`you have ${wincount1} wins - your opponent has ${wincount2} wins`;
}