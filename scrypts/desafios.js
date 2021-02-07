const divCards = document.getElementById('cards')
var cardAtual;
var novoCard;
var corStack;

window.addEventListener('load', function desafios(){

    fetch('http://127.0.0.1:8000/api/challenge')
            .then(res => res.json())
            .then(json => {
                json.challenges.forEach(desafio => {

                    /* cor por tipo de stack */
                    switch(desafio.id_area_expertise) {
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
                            <div class="stack ${corStack} font-4 d-flex justify-content-center align-items-center"> ${desafio.id_area_expertise.toUpperCase()} </div>
                        </a>
                    </div>
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html
                });
            })
})