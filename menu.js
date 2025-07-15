function alternarMenu(){
const menu = document.getElementById("menu")
 menu.classList.toggle("active")
  const close = document.querySelector(".close")  
  const open = document.querySelector(".open")
 if(close.style.opacity=="1"){
 close.style.opacity="0"
 open.style.opacity="1"
}
else{
 close.style.opacity="1"
 open.style.opacity="0"
}
}
function removerMenu(){
 const menu = document.getElementById("menu")
 menu.classList.toggle("active")
   
}