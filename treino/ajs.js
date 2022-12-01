const caixa = document.getElementsByClassName("div");
const ah1 = document.getElementsByClassName("h1");


function exibirCaixa(e){
    e.nextElementSibling.style.visibility = "none";
}

exibirCaixa.addEventListener("click",ah1);XMLDocument