async function buscaEndereco(cep){
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = "";
  try{ // try = tendar, "try" é usado para envolver código onde erros podem ocorrer e que deve ser seguido por "catch" para tratá-los.
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro){
      throw Error("CEP não existente!");
    };
    var logradouro = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var ibge = document.getElementById("ibge");
    var ddd = document.getElementById("ddd");
    var uf = document.getElementById("uf");

    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;
    localidade.value = consultaCEPConvertida.localidade;
    ibge.value = consultaCEPConvertida.ibge;
    ddd.value = consultaCEPConvertida.ddd;
    uf.value = consultaCEPConvertida.uf;
    
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch(erro){
    mensagemErro.innerHTML = `<p class="mensagem-erro">CEP inválido. Tente novamente!</p>`
    console.log(erro);
  };
};

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


