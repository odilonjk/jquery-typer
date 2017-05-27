//  Obter tamanho da frase.
//  Em vez de usar o document.querySelector
//  podemos usar o jQuery ( jQuery() = $() )
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

//  Obter contador de palavras da lista e setar a quantia correta
var contadorPalavras = $("#contador-palavras");
contadorPalavras.text(numPalavras);
