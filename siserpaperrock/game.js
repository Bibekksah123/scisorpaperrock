let userscore=0;
let comscore=0;
const chooses=document.querySelectorAll('.choose');
let meg=document.querySelector('#msg');
let score=document.querySelector('#me');
let comp=document.querySelector('#com')
const computerchoose=()=>{
const rack=["rock","paper","scissors"];
const randomshow=Math.floor(Math.random()*3);
return rack[randomshow];
}
function showwiner(userwin){
    if(userwin){
        console.log('you win');
        meg.textContent='you win!';
        meg.style.backgroundColor='green';
score.textContent=userscore;
        userscore++;
        
    }else{
        console.log('you lose');
        meg.textContent='computer win!'
        comp.textContent=comscore;
        comscore++;
    }
}
const showplay=(userchoose)=>{
    console.log(userchoose);
    const computerchoice=computerchoose();
    console.log(computerchoice);
    if(userchoose===computerchoice){
        console.log('draw')
        meg.innerText='draw!';
       
    }else{
        let userwin=true;
    }if(userchoose==='rock'){
        userwin=computerchoice==='paper'? false:true;
    }else if(userchoose==='paper'){
        userwin=computerchoice==='scissors'?false:true;
    }else{
        userwin=computerchoice==='rock'?false:true;
    }
    showwiner(userwin);

}
chooses.forEach((choose)=>{
  
    const userchoose=choose.getAttribute('id');
  choose.addEventListener("click",()=>{

    showplay(userchoose);

  })
})