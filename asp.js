// const iconBurguer=document.querySelector(".icon_burguer")
// const menu=document.querySelector(".menu_nuevo");

// iconBurguer.addEventListener("click",function(){
//     menu.classList.toggle("show_menu")
// })

const iconBurguer=document.querySelector("#icon_burguer");
const menu=document.querySelector("#menu");

iconBurguer.addEventListener('click', function(){
   menu.classList.toggle('show_menu');
})