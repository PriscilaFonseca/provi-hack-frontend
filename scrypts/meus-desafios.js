const divCards = document.getElementById('cards');
const nomeMenu = document.getElementById('nome-menu');

var cardAtual;
var novoCard;
var corStack;
var corStatus;

window.addEventListener('load', function dados(){

    fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(usuario => {
                nomeMenu.innerText = usuario.name.split(' ')[0]; //primeiro nome
            })
})


window.addEventListener('load', function desafiosRealizados(){

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            .then(res => res.json())
            .then(json => {
                json.forEach(desafio => {

                    switch(desafio.id) {
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

                    switch(desafio.userId) {
                        case "concluido":
                            corStatus = "concluido"
                            break;
                        case "em andamento":
                            corStatus = "andamento"
                            break;
                        default:
                            corStatus = "default"
                    }


                    cardAtual = divCards.innerHTML;

                    novoCard = `
                    <div class="desafio-card">
                        <a class="d-flex justify-content-between align-items-center link-desafio" href="./pagina-desafio.html?id=${desafio.id}">
                            <p class="font-3">${desafio.title}</p>
                            <div class="d-flex justify-content-between">
                                <div class="stack ${corStack} font-4 d-flex justify-content-center align-items-center"> ${desafio.id} </div>
                                <div class="status ${corStatus} font-4 d-flex justify-content-center align-items-center"> ${desafio.id}  </div>
                            </div>
                        </a>
                    </div>
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html

                })
            })
})