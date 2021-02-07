const stack = document.getElementById('stack-desafio')
const titulo = document.getElementById('titulo-desafio');
const descricao = document.getElementById('descricao-desafio')
const cardId = window.location.href.split("?id=")[1]; //id do card

console.log(cardId)

window.addEventListener('load', function desafio(){

    fetch(`https://fakestoreapi.com/products/${cardId}`)
            .then(res => res.json())
            .then(desafio => {
                    stack.innerText = desafio.category.toUpperCase();
                    titulo.innerText = desafio.title;
                    descricao.innerText = desafio.description; 
            })
})