
let music = new Audio("./sounds/tambdi-chambdi.mp3");
let audioturn = new Audio("./sounds/ting.mp3");
let gameover = new Audio("./sounds/gameover.mp3");
let turn = "X";
let gameisover = false;
//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}

//Function to check for a win
const checkWin = ()=>{
   let boxtext = document.getElementsByClassName('boxtext')  
   let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!"
         gameisover = true;
         document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "250px"
         music.play()
        }
     })

}

//Game-logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
      if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeTurn();
        audioturn.play();
        checkWin();
        if(!gameisover){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
       } 
     }
   }) 
})

//add on click listener to reset the buttons
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
      element.innerText = "";
      music.pause();
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
    })
})
