//  Obter tempo inicial
var tempoInicial = $("#contador-segundos").text();
var campo = $(".campo-digitacao");

$(function () {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
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

function atualizaTempoInicial(tempo) {
  $("#contador-segundos").text(tempo);
}

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
    //  Desativando botão durante o jogo
    $("#botao-reiniciar").attr("disabled", true)

    //  Setado para subtrair a cada 1000ms
    var cronometro = setInterval(function () {
      tempoRestante--;
      //  Atribuindo o novo valor
      $("#contador-segundos").text(tempoRestante);

      //  Desabilitando textArea ao fim do tempo
      if(tempoRestante < 1) {

        //  Desligando o cronometro
        clearInterval(cronometro);

        finalizaJogo();
      }
    }, 1000);
  });
};

function finalizaJogo() {
  campo.attr("disabled", true);
  //  Adicionando classe estilizada
  campo.addClass("campo-desativado");

  //  Reativando botão reiniciar
  $("#botao-reiniciar").attr("disabled", false);

  inserePlacar();
};

function reiniciarJogo() {
  //  Reiniciar campo
  campo.attr("disabled", false);
  campo.val("");
  //  Removendo fundo cinza
  campo.removeClass("campo-desativado");

  //  Reiniciar contadores
  $("#contador-segundos").text(tempoInicial);
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  inicializaCronometro();

  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
};

function inicializaMarcadores() {
  campo.on("input", function () {
    var frase = $(".frase").text();
    var digitado = campo.val();
    var correto = frase.startsWith(digitado);
    if(correto) {
      campo.removeClass("borda-vermelha");
      campo.addClass("borda-verde");
    } else {
      campo.removeClass("borda-verde");
      campo.addClass("borda-vermelha")
    }
  });
};
