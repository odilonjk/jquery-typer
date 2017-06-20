$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
  //  slideToggle funciona como um show / hide
  //  sem necessidade de if-else.
  //  Também adiciona animação de slide
  //  O stop() é necessario para não ficar com uma
  //  usabilidade estranha caso o usuario
  //  dê varios cliques seguidos.
  $(".placar").stop().slideToggle(1000);
};

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var acertos = $("#contador-palavras").text();
  var usuario = "OdilonJK";
  var linha = novaLinha(usuario, acertos);

  //  Adicionando evento de click no botão
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);

  //  Mostrar o placar
  $(".placar").slideDown(1000);
  scrollPlacar();

};

function scrollPlacar() {
  //  Captura a distancia do placar ao topo
  var posicaoPlacar = $(".placar").offset().top;

  //  Para funcionar no Firefox, é necessario
  //  acessar o html. No Chrome é usado o body.
  $("html, body").animate({
    scrollTop: posicaoPlacar+"px"
  }, 1000);

}

function novaLinha(usuario, acertos) {
  //  Criando objeto usando jQuery
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaAcertos = $("<td>").text(acertos);
  var colunaRemover = $("<td>");
  var link = $("<a>").addClass("botao-remover")
                     .attr("href","#");
  var icone = $("<i>").addClass("small")
                      .addClass("material-icons")
                      .text("delete");

  link.append(icone);
  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaAcertos);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(event) {
  event.preventDefault();
  //  Acessando o pai do pai para remover o TR completo
  var linha = $(this).parent().parent();
  //  Adiciona efeito de fadeOut, mas para remover
  //  ainda é necessario chamar o remove()
  //  O setTimeout é necessario para o remove não
  //  remover o elemento antes do fadeOut ser concluído
  linha.fadeOut(600);
  setTimeout(function() {
    linha.remove();
  }, 600)
};
