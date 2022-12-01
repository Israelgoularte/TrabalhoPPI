document.addEventListener('DOMContentLoaded', function(){
    const ah2 = document.querySelectorAll("h2");
    for(let no of ah2){

        no.onclick = () => no.nextElementSibling.style.display ='none';
        no.addEventListener("dblclick",() => {
            no.nextElementSibling.style.display ='block';
        })
    }
    
});

