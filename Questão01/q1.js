const verificarBotao = document.getElementById("botao");

verificarBotao.addEventListener("click", function() {
  const nota = document.getElementById("nota").value;

  if (nota < 0 || nota > 10 ) {
    alert("Esta nota não é válida. Por favor, informar uma nota entre 0 e 10.");
    document.getElementById("nota").value = " ";
  } else {
    alert("Nota: " + nota);
    document.getElementById("nota").value = "";
  }
});