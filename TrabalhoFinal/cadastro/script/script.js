window.onload = function () {
    document.forms.formCadastro.onsubmit = validaForm; //no envio do formulario inicia a função validaForm
}

function validaForm (e) { // inicio da funcao
    let form = e.target; //variavel 
    let formValido = true; //variavel 

    const spanUsuario = form.usuario.nextElementSibling; //uma constante spanUsuario
    const spanSenha = form.senha.nextElementSibling;//uma constante spanSenha
    const spanEmail = form.email.nextElementSibling;//uma constante spanEmail

    spanUsuario.textContent = ""; //inicia variavel como vazios 
    spanSenha.textContent = "";//inicia variavel vazios 
    spanEmail.textContent = "";//inicia variavelo vazios 

    if (form.usuario.value === "") { //caso não tiver cido preenchido o campo (Usuario) exibe alerta
        spanUsuario.textContent = 'O usuario deve ser preenchido';
        formValido = false;
    }

    if (form.senha.value === "") {//caso não tiver cido preenchido o campo (Senha) exibe alerta
        spanSenha.textContent = 'A senha deve ser preenchida';
        formValido = false;
    }

    if (form.email.value === "") {//caso não tiver cido preenchido o campo (Email) exibe alerta
        spanEmail.textContent = 'O email deve ser preenchido';
        formValido = false;
    }

    return formValido; //se estiver tudo preenchido envia o formulario.
}