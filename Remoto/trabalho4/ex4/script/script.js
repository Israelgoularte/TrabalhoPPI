window.onload = function () { //Ocorre quando a página inteira e carregada
    const botaoAdicionar = document.querySelector("button"); //a variavel botaoAdicionar se torna referencia a o Button selecionado no HTML
    botaoAdicionar.addEventListener("click", adicionaInteresse); //caso seja clicado no botão executa a funcao adicionainteresse

    const campoInteresse = document.querySelector("#interesse"); //a variavel campoInteresse se torna referencia a o elemento com ID Interesse selecionado no HTML
    campoInteresse.addEventListener("keyup", e => { //Adiciona uma atividade para quando for pressionado uma tecla
        if (e.key === "Enter") //caso seja apertado enter
            adicionaInteresse(); //executa a função
    });
}


function adicionaInteresse() {
    const campoInteresse = document.querySelector("#interesse"); //a variavel campoInteresse se torna referencia a o elemento com ID Interesse selecionado no HTML
    const listaInteresses = document.querySelector("ol");//a variavel listaInteresses se torna referencia a o elemento OL selecionado no HTML
     
    const novoLi = document.createElement("li"); // Adiciona um elemento na li no html e variavel (novoLi) sera sua referencia
    const novoSpan = document.createElement("span"); //  Adiciona um elemento na span no html e variavel (novoSpan) sera sua referencia
    const novoBotao = document.createElement("button"); //  Adiciona um elemento na button no html e variavel (novoBotao) sera sua referencia

    novoSpan.textContent = campoInteresse.value; //armazena o conteudo da varialvel vampoInteresse para o conteudo de novoSpan
    novoBotao.textContent = '✖'; //novo botao

    novoLi.appendChild(novoSpan); //  adiciona uma nova lista no novoSpan
    novoLi.appendChild(novoBotao);  // adiciona uma nova lista no novoBotao
    listaInteresses.appendChild(novoLi); // Adiciona uma nova lista em ListaInteresse que armazena o ol da pagian HTML


    novoBotao.onclick = function () { //atribui uma função ao clicar no novo botao
        listaInteresses.removeChild(novoLi); //estabelece que vai remover o elemento ao clicar neste botao
    } 
    campoInteresse.value = ''; //limpa o campo
}