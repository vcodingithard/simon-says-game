let started=false;
let btns=["red","yellow","green","purple"];
let start=document.querySelector("#start");
let restart=document.querySelector("#restart");
let heading=document.querySelector("h2");
let levelup=0;
let body=document.querySelector("body");
body.style.textAlign="center";
let userseq=[];
let gameseq=[];
let score=[];
document.body.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if(started==false){
            level();
            started=true;
        }
    }
});

start.addEventListener("click",function(){
    if(started==false){
        level();
        started=true;
    }
});
restart.addEventListener("click",function(){
    started=false;
    gameseq=[];
    userseq=[];
    levelup=0;
    level();
});
function level(){
    userseq=[];
    levelup++;
    heading.innerHTML=`Level ${levelup}`;
    randomColor();
}
 


function randomColor(){
    let rdmIdx=Math.floor(Math.random()*4);
    let rdmcolor=btns[rdmIdx];
    gameseq.push(rdmcolor);
    console.log(gameseq);
    let gbtn=document.querySelector(`.${rdmcolor}`);
    gbtn.classList.add("flash");
    setTimeout(()=>{
    gbtn.classList.remove("flash");
    },500);
}



function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(function(){
                level();
            },750);
        }
    }else{
        body.classList.add("redbg");
        setTimeout(()=>{
        body.classList.remove("redbg");
        },750);
        score.push(levelup);
        let max=findLargestElement(score);
        heading.innerHTML=`Game over. Your highest score is ${max}.<BR>Click on the restart button to start the game`;
        
        
        levelup=0;
        started=false;
        gameseq=[];
        userseq=[];
}
    
}
function findLargestElement(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",function(){
        btn.classList.add("userflash");
        setTimeout(()=>{
            btn.classList.remove("userflash");
        },500);
        
        userseq.push(btn.getAttribute("ID"));
        console.log(userseq);
        check(userseq.length-1);
    });
    
}