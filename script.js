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