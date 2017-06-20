$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://dockerhost:3000/frases", trocaFrase)
    .fail(function () {
        $("#erro").toggle();
        setTimeout(function () {
          $("#erro").toggle();
        }, 2500)
      }
    )
};

function trocaFrase(data) {
  var frase = $(".frase");
  var indice = Math.floor(Math.random() * data.length);
  frase.text(data[indice].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[indice].tempo);
};
