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
campo.on("keyup", function() {

  // Contando caracteres e adicionando ao contador.
  $("#contador-caracteres").text(campo.val().length);

  // Contando palavras e adicionando ao contador.
  $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
});
