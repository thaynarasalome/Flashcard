function criaCartao(categoria, perguntas, resposta){
    let container=document.getElementBy('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

cartao.innerHTML =`
<div class="cartao_conteudo">
    <h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p> ${pergunta}</p>
    <p>O que é JavaScript?</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>O JavaScript é uma linguagem de programação</p>
    </div>
    </div>
`
let respostaEstaVisivel = false 

function virarCartão(){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active',virarCartão)
}
cartao. addEventListener('click', virarCartão)

container. appendChild(cartao)
}
