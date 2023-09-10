function abrirMapa() {
  var cep = document.getElementById('cep').value;
  
  if (!cep) {
    alert("Por favor, insira um CEP antes de abrir o mapa.");
    return; // Retorna sem fazer mais nada se o campo CEP estiver vazio.
  }
  
  var url = `https://www.google.com/maps?q=CEP ${cep}`;
  window.open(url, '_blank');
}
