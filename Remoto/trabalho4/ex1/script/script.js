
document.addEventListener('DOMContentLoaded', function(){
    const ah1 = document.querySelector("h1");
    ah1.addEventListener("click",() => ah1.innerHTML = 'Dono do Curriculo');
});

document.addEventListener('DOMContentLoaded', function(){
    const ah2 = document.querySelectorAll("h2");
    for(let no of ah2)
        no.addEventListener("click", alteraConteudo);
});

function alteraConteudo(e){
    e.target.textContent = "Obrigado!";
}