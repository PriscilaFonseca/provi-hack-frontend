const divCards = document.getElementById('cards')
var cardAtual;
var novoCard;

window.addEventListener('load', function desafio(){

    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => {
                json.forEach(desafio => {
                    console.log(desafio)

                    cardAtual = divCards.innerHTML;

                    novoCard = `
                    <div class="desafio-card">
                        <a class="d-flex justify-content-between align-items-center link-desafio" href="./pagina-desafio.html?id=${desafio.id}">
                            <p class="font-3">${desafio.title}</p>
                            <div class="stack font-4 d-flex justify-content-center align-items-center"> ${desafio.category.toUpperCase()} </div>
                        </a>
                    </div>
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html
                });
            })
})