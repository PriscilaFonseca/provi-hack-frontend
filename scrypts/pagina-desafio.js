const stack = document.getElementById('stack-desafio')
const titulo = document.getElementById('titulo-desafio');
const descricao = document.getElementById('descricao-desafio')

window.addEventListener('load', function desafio(){

    fetch('https://fakestoreapi.com/products?limit=1')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                json.forEach(desafio => {
                    stack.innerText = desafio.category.toUpperCase();
                    titulo.innerText = desafio.title;
                    descricao.innerText = desafio.description; 
                });
            })
})