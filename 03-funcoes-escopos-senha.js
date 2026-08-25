 // VARIÁVEIS DE ESCOPO GLOBAL: existem em todo o arquivo
  let contadorPreferencial = 0;
  let contadorNormal = 0;

  // FUNÇÃO que recebe parâmetros e RETORNA um valor (escopo local)
  function gerarSenha(prefixo, contadorAtual) {
    const numero = contadorAtual + 1;              // variável local, só existe aqui dentro
    const numeroFormatado = String(numero).padStart(3, '0');
    return `${prefixo}${numeroFormatado}`;
  }

  document.getElementById('btnPreferencial').addEventListener('click', function () {
    contadorPreferencial++;
    document.getElementById('senha').textContent = gerarSenha('P', contadorPreferencial - 1);
  });

  document.getElementById('btnNormal').addEventListener('click', function () {
    contadorNormal++;
    document.getElementById('senha').textContent = gerarSenha('N', contadorNormal - 1);
  });