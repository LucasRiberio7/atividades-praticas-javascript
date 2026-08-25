  // VARIÁVEL: guarda o número escolhido (pode mudar, por isso é "let")
  let numero = 5;

  document.getElementById('btnGerar').addEventListener('click', function () {
    // pega o valor digitado e CONVERTE de texto (string) para número
    numero = Number(document.getElementById('numero').value);

    const lista = document.getElementById('resultado');
    lista.innerHTML = ''; // limpa o resultado anterior

    // LOOP: repete de 1 até 10, usando o OPERADOR de multiplicação
    for (let i = 1; i <= 10; i++) {
      const item = document.createElement('li');
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      lista.appendChild(item);
    }
  });
  