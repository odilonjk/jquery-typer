//  Obter tempo inicial
var tempoInicial = $("#contador-segundos").text();
var campo = $(".campo-digitacao");

$(function () {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciarJogo);
});

//  Obter contador de palavras da lista e setar a quantia correta
function atualizaTamanhoFrase() {
  //  Obter tamanho da frase.
  //  Em vez de usar o document.querySelector
  //  podemos usar o jQuery ( jQuery() = $() )
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;

  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
};

function inicializaContadores() {
  //  Obter textArea
  campo.on("input", function() {
    // Contando caracteres e adicionando ao contador.
    $("#contador-caracteres").text(campo.val().length);

    // Contando palavras e adicionando ao contador.
    $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
  });
};

//  Fazer a redução do tempo de jogo
function inicializaCronometro() {
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
};

function reiniciarJogo() {
  //  Reiniciar campo
  campo.attr("disabled", false);
  campo.val("");

  //  Reiniciar contadores
  $("#contador-segundos").text(tempoInicial);
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  inicializaCronometro();
}
