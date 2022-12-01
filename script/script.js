window.onload = function () { //Ocorre quando a página inteira e carregada
    buttons = document.querySelectorAll("nav button"); // seleciona todos os botoes dentro da nav
    for (let button of buttons) { //passo por todos os botoes e executa proxima linha
        button.onclick = () => openTab(button.dataset.tabname); //quando clicar no botao mostra a variavel armazenada no html
    }
    openTab("t0"); //Valor inicial a ser exibido
}

function openTab(tabName) {
    const lastBtnActive = document.querySelector(".buttonActive"); // se torna referencia a classe "buttonActive" definido no html
    const lastTabActive = document.querySelector(".tabActive"); // se torna referencia a classe "tabActive" definido no html
    if (lastTabActive !== null || lastBtnActive !== null) { // caso diferente de nulo executa as proximas 2 linhas caso contrario pula
        lastTabActive.className = " "; //limpa a variavel
        lastBtnActive.className = " "; //limpa a variavel
    }
    const query1 = ".tabs > section[data-tabname = '" + tabName + "']"; // seleciona o elemento section que tem o atributo data-tabname com o atributo que foi passado como argumento
    const query2 = "nav button[data-tabname='" + tabName + "']"; // seleciona o elemento button que tem o atributo data-tabname com o atributo que foi passado como argumento

    document.querySelector(query1).className="tabActive"; // verificando se a tab esta ativa
    document.querySelector(query2).className="buttonActive";//verificando se o button esta ativo
}