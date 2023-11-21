function darkMode(){
    const pagina = document.body
    pagina.classList.toggle("dark-mode")

    const botao = document.getElementById("button")

    const isDarkMode = document.body.classList.contains("dark-mode")
    
    if(isDarkMode == true){
        botao.textContent = "Modo Claro"
    }else {
        botao.textContent = "Modo Escuro"
    }
}

function validaFormulario(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("senhaConfirmar").value;

    console.log(senha)

    // Validação de campos vazios
    if(nome == '' || email == '' || senha == '' || confirmaSenha == ''){
        alert("Preencha os campos vazios!!")
        return
    }

    //Validação do campo do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return

    }
    //Verifica tamanho da senha
    if(senha.length < 8){
        alert("A senha precisa ter mais de 8 caracteres!")
        return
    }

    if(confirmaSenha !== senha || senha !== confirmaSenha){
        alert("Digite uma senha igual a senha anterior.")
        return
    }
   

    alert("Cadastro concluido")
}

