const addBook = document.querySelector('.addbook');
const modal= document.querySelector(".modal-d");
const maincont=document.querySelector(".maincont");
const btnclose=document.querySelector(".close");

addBook.addEventListener("click", function() {
modal.classList.add("show");
maincont.classList.add("hide");
})


btnclose.addEventListener("click",function(){
  modal.classList.remove("show");
  maincont.classList.remove("hide");

})
