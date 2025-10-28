let menu = document.querySelector('.fa-bars');
let ulone = document.querySelector('.ulone');
let show = false;

menu.addEventListener('click', () => {
     if(!show){
    ulone.style.display = "block"; 
    show = true;
     }else{
        ulone.style.display = "none";
        show = false;
     }
});

// 5th part countdown

let count = document.querySelector('.count');
let countone = document.querySelector('.countone');
let counttwo = document.querySelector('.counttwo');
let countthree = document.querySelector('.countthree');

let counter = 0;
let counterOne = 0;
let counterTwo = 0;
let counterThree = 0;

let intervel = setInterval(() => {
    count.textContent = counter;
    counter++
    if( counter > 2){
     
       clearInterval(intervel)
    }
},1000);

let intervelOne = setInterval(()=>{
   countone.textContent = counterOne;
   counterOne++
   if( counterOne > 10){
      clearInterval(intervelOne)
   }
},400);

let intervelTwo = setInterval(()=>{
   counttwo.textContent = counterTwo;
   counterTwo++
   if( counterTwo > 20){
      clearInterval(intervelTwo)
   }
},200);


let intervelThree = setInterval(()=>{
   countthree.textContent =counterThree;
   counterThree++
   if( counterThree > 50){
      clearInterval(intervelThree)
   }
},50);





// footer part 

let name = document.querySelector('.name');
let lastname = document.querySelector('.lastname');
let email = document.querySelector('.email');
let phon = document.querySelector('.phon');
let sendbtn = document.querySelector('.sendbtn');
let error = document.querySelector('.error');

sendbtn.addEventListener('click',()=>{
   let inputName = name.value;
   if(inputName ==""){
     error.textContent = 'Filp up the from'
   }
   
})

