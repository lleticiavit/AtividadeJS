const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (password === username) {
    alert("A senha deve ser diferente do usuário");
  } else {
    alert("Cadastro realizado com sucesso.");
    form.submit();
  }
  
  senhaInput.value = '';
});