function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidadeProduto = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0]; //O split deve ser feito com aspas simples
    let valorProduto = produto.split('R$')[1]; //O colchete serve para indicar se estamos pegando a parte antes ou depois do split

    let subtotal = valorProduto*quantidadeProduto;
    

    let carrinho = document.getElementById('lista-produtos'); //Para adicionarmos produtos ao carrinho podemos utilizar o innerHTML
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;

    let valorCarrinho = document.getElementById('valor-total');
    valorCarrinho.innerText = `R$${subtotal}`;

}

function limpar(){
    document.getElementById('valor-total').innerText = `R$${0}`;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = '0';

}