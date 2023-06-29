const ordenarPreco = document.getElementById('btnOrdenarPorPreco') 

ordenarPreco.addEventListener('click', livrosPorPreco)

function livrosPorPreco() {
   let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}