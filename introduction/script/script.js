// modal
const open = document.getElementById("my_resume");
const close = document.getElementById("close");
const modal = document.querySelector(".modal_wrapper");

open.addEventListener('click', function() {
  modal.style.display = "flex"; 
})

close.addEventListener('click', function() {
  modal.style.display = "none"; 
})
