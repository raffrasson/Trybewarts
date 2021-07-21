//login

//pega o botão do login e adiciona o listener:

let botaoLogin = document.querySelector("#botaoLogin");
botaoLogin.addEventListener('click', login);

function login() {
 
    //salva os valores dos inputs:
    let usuario = document.querySelector("#inputEmail").value;
    let senha = document.querySelector("#inputSenha").value;

    //compara com o login autorizado e retorna mensagem:

    if((usuario === "tryber@teste.com") && (senha === "123456")) {
        alert('Olá, Tryber!')
    }
    else {
        alert('Login ou senha inválidos.')
    }
}