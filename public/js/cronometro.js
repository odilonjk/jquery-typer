//  Fazer a redução do tempo de jogo
function inicializaCronometro() {
  campo.one("focus", function () {
    var tempoRestante = $("#contador-segundos").text();
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
