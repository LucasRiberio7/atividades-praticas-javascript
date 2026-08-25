 // FUNÇÃO simples: recebe um nome e adiciona um <li> na lista (DOM)
  function adicionarNaFila(nome) {
    const item = document.createElement('li');
    item.textContent = nome;
    document.getElementById('fila').appendChild(item);
  }

  document.getElementById('btnEntrar').addEventListener('click', function () {
    const campo = document.getElementById('nome');
    const nome = campo.value.trim();

    if (nome === '') {
      alert('Digite um nome antes de entrar na fila.');
      return; // encerra a função aqui, sem adicionar
    }

    adicionarNaFila(nome);
    campo.value = ''; // limpa o campo para o próximo cliente
  });
