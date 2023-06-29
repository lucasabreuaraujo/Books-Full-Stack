const todosLivros = document.querySelectorAll('.btn')


todosLivros.forEach(btn => btn.addEventListener('click', filtrarLivros) )

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtarDisponibilidade() : filtrarCategoria(categoria) 
    exibirLivros(livrosFiltrados)
    if(categoria == 'disponivel'){
        const precoTotal = precoTotalDosLivrosDisponiveis(livrosFiltrados)
        
        exibirValorTotal(precoTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(precoTotal){
    valorTotal.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
  </div>`
}