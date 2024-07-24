const produtos = [
  {id: 1, nome: "Camisa" },
{ id: 2, nome: "Calça"},
{id: 3, nome: "Sandalias"},
];

function EncontrarProdutoPorId (id){
  const  produtoEncontrado = produtos.find((produto) => produto.id === id)
 return 
}

  console.log(produtoEncontrado);

EncontrarProdutoPorId((1))