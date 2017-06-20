$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://dockerhost:3000/frases", trocaFrase);
};

function trocaFrase(data) {
  var frase = $(".frase");
  var indice = Math.floor(Math.random() * data.length);
  frase.text(data[indice].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[indice].tempo);
};
