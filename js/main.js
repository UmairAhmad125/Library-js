const addBook = document.querySelector('.addbook');
const modal= document.querySelector(".modal-d");
const btncont=document.querySelector(".btncont");
const btnclose=document.querySelector(".close");

addBook.addEventListener("click", function() {
modal.classList.add("show");
btncont.classList.add("hide");
})


btnclose.addEventListener("click",function(){
  modal.classList.remove("show");
  btncont.classList.remove("hide");

})
