let total = 0;
//Função reaproveitada por todos os botões (recebe parametros diferentes)
function adicionarItem(nome, preco){
    total+= preco;
    const item = document.createElement('li');
    item.innerHTML = `<span>{nome}</span><span>R$${preco}</span>`;
    document.getElementById('carrinho').appendChild(item);
    atualizarTotal();
}
function atualizarTotal(){
    document.getElementById('total').textContent =`Total: R$ ${total}`;
} 