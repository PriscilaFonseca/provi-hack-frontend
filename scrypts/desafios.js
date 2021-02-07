const divCards = document.getElementById('cards')
var cardAtual;
var novoCard;
var corStack;

window.addEventListener('load', function desafios(){

    fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(json => {
                json.forEach(desafio => {
                    console.log(desafio)

                    /* cor por tipo de stack */
                    switch(desafio.category) {
                        case "frontend":
                            corStack = "front"
                            break;
                        case "backend":
                            corStack = "back"
                            break;
                        case "mobile":
                            corStack = "mob"
                            break;
                        case "data":
                            corStack = "data"
                            break;
                        case "ui/ux":
                            corStack = "ui"
                            break;  
                        default:
                            corStack = "default"
                    }

                    cardAtual = divCards.innerHTML;

                    novoCard = `
                    <div class="desafio-card">
                        <a class="d-flex justify-content-between align-items-center link-desafio" href="./pagina-desafio.html?id=${desafio.id}">
                            <p class="font-3">${desafio.title}</p>
                            <div class="stack ${corStack} font-4 d-flex justify-content-center align-items-center"> ${desafio.category.toUpperCase()} </div>
                        </a>
                    </div>
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html
                });
            })
})