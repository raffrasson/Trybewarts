// login

// pega o botão do login e adiciona o listener:

const botaoLogin = document.querySelector('#botaoLogin');

function login() {
  // salva os valores dos inputs:
  const usuario = document.querySelector('#inputEmail').value;
  const senha = document.querySelector('#inputSenha').value;

  // compara com o login autorizado e retorna mensagem:

  if ((usuario === 'tryber@teste.com') && (senha === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', login);
