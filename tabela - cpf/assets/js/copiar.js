function copiarInformacoes() {
  var cep = document.getElementById('cep').value;
  
  if (!cep) {
    alert("Por favor, insira um CEP antes de copiar as informações.");
    return; // Retorna sem fazer mais nada se o campo CEP estiver vazio.
  }
  
  var logradouro = document.getElementById("logradouro").value;
  var bairro = document.getElementById("bairro").value;
  var localidade = document.getElementById("localidade").value;
  var ibge = document.getElementById("ibge").value;
  var ddd = document.getElementById("ddd").value;
  var uf = document.getElementById("uf").value;

  // Concatenando todas as informações em uma única string
  var informacoes = `Logradouro: ${logradouro}\nBairro: ${bairro}\nLocalidade: ${localidade}\nIBGE: ${ibge}\nDDD: ${ddd}\nUF: ${uf}`;

  // Criando um elemento de área de texto temporário para copiar o texto
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = informacoes;

  // Adicionando o elemento temporário à página e selecionando seu conteúdo
  document.body.appendChild(tempTextarea);
  tempTextarea.select();

  // Copiando o texto para a área de transferência
  document.execCommand("copy");

  // Removendo o elemento temporário da página
  document.body.removeChild(tempTextarea);

  // Exibindo uma mensagem de sucesso
  alert("Informações copiadas para a área de transferência!");
}
