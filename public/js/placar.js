$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
  //  slideToggle funciona como um show / hide
  //  sem necessidade de if-else.
  //  Também adiciona animação de slide
  $(".placar").slideToggle(1000);
};

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var acertos = $("#contador-palavras").text();
  var usuario = "OdilonJK";
  var linha = novaLinha(usuario, acertos);

  //  Adicionando evento de click no botão
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);
};

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
  $(this).parent().parent().remove();
};
