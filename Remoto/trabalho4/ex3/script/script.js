window.onload = function () {
   const modal = document.querySelector(".modal");
   const buttonClose = modal.querySelector(".buttonClose");
   buttonClose.addEventListener("click", function(){
    modal.style.display='none';
   });

   const buttonOpenModal =  document.getElementById("btOpenModal");
   buttonOpenModal.addEventListener("click", function(){
   modal.style.display ='block';
   });
}