let listaDecompras: string[] = [];
//inicializa só para entrar no while
let nomeDoProduto: string | null = 'só para inicializar';

//enquanto o usuario não digitar 'fim'
while (nomeDoProduto !== 'fim') {
    //se nomeDoProduto receber 'fim', o while para,
    //se for um nome qualquer ele continua pedindo os nomes dos produtos
    nomeDoProduto = prompt("Digite o nome do produto")
    //empurra o nome do produto naa lista de compras
    listaDecompras.push(nomeDoProduto)
}
//ao finalizar ele mostra a lista e aquantidade de itens da lista
console.log(listaDecompras)
console.log(listaDecompras.length)
