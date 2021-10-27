

function animateLogo(){
  setTimeout(function(){
    const logo = document.getElementById('image-logo');
    logo.classList.remove = 'head-left'
    logo.className = 'head-right'
  }, 500);
  setTimeout(function(){
    const logo = document.getElementById('image-logo');
    logo.classList.remove = 'head-right'
    logo.className = 'head-left'
    animateLogo()
  },1000);
}



const lists = document.querySelectorAll(".flex-item-list");

lists.forEach(function(list) {
  list.addEventListener("click",()=>{
    const audio  = new Audio('click.mp3');
    audio.play()
  })
});

window.onload = function(){
  animateLogo()
const audio  = new Audio('toxic.mp3');
// audio.play()
audio.volume=0.2
}