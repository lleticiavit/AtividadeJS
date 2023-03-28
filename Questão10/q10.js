function gerarNumeros() {
    // Lê os valores dos campos de input
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    // Verifica qual é o menor número
    var menor = num1 < num2 ? num1 : num2;
    var maior = num1 > num2 ? num1 : num2;
    
    // Gera a lista de números inteiros entre os números informados
    var numeros = "";
    for (var i = menor; i <= maior; i++) {
      numeros += i + " ";
    }
    
    // Exibe a lista de números em um alerta
    alert("Os números inteiros entre " + menor + " e " + maior + " são: " + numeros);
  }