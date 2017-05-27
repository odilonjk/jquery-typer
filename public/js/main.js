//  Obter tamanho da frase.
//  Em vez de usar o document.querySelector
//  podemos usar o jQuery ( jQuery() = $() )
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

//  Obter contador de palavras da lista e setar a quantia correta
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

//  Obter textArea
var campo = $(".campo-digitacao");
campo.on("input", function() {
  // Contando caracteres e adicionando ao contador.
  $("#contador-caracteres").text(campo.val().length);

  // Contando palavras e adicionando ao contador.
  $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
});

//  Fazer a redução do tempo de jogo
var tempoRestante = $("#contador-segundos").text();
campo.one("focus", function () {
  //  Setado para subtrair a cada 1000ms
  var cronometro = setInterval(function () {
    tempoRestante--;
    //  Atribuindo o novo valor
    $("#contador-segundos").text(tempoRestante);

    //  Desabilitando textArea ao fim do tempo
    if(tempoRestante < 1) {
      campo.attr("disabled", true);

      //  Desligando o cronometro
      clearInterval(cronometro);
    }
  }, 1000);
});
