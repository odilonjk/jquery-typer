$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {

  $("#spinner").show();

  $.get("http://dockerhost:3000/frases", trocaFraseRandom)
    .fail(function() {
        $("#erro").toggle();
        setTimeout(function () {
          $("#erro").toggle();
        }, 2500)
    })
    .always(function () {
      $("#spinner").hide();
    })

};

function buscaFrase() {
  $("#spinner").show();

  var id = $("#frase-id").val();
  var dados = { id: id};
  $.get("http://dockerhost:3000/frases", dados, trocaFrase)
  .fail(function() {
    $("#erro").toggle();
    setTimeout(function () {
      $("#erro").toggle();
    }, 2500)
  })
  .always(function () {
    $("#spinner").hide();
  })
};

function trocaFrase(data) {
  var frase = $(".frase");
  frase.text(data.texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data.tempo);
}

function trocaFraseRandom(data) {
  var frase = $(".frase");
  var indice = Math.floor(Math.random() * data.length);
  frase.text(data[indice].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[indice].tempo);
};
