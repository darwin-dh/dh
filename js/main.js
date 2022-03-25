const btn = document.getElementById('btn')
const menu = document.querySelector('.navbar-light')
const url = "../inicio.html"
let posTop = -200
btn.addEventListener('click', (index) => {
    //  btn.style.setProperty("background-color", "#6ab150"); 
    const myTimeout = setTimeout(myGreeting, 3000);
    function myGreeting() {
       btn.style.setProperty("background-color", "#6ab150"); 
       window.location.href = url
    
      }
})

/*efectos menu */
/*  function efectos(){
     menu.style.top = posTop +"px"
     const tiempo =setTimeout(tMenu, 3000);
     function tMenu() {
        menu.style.setProperty("top", "0"); 
        }
 }
 efectos() */