const nome = document.getElementById('nome');
const nomeMenu = document.getElementById('nome-menu');
const descricao = document.getElementById('descricao');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const behance = document.getElementById('behance');
const medium = document.getElementById('medium');
const interesse = document.getElementById('stack-fav');
const tecnologias = document.getElementById('tecnologias');

const numDesafios = document.getElementById('num-desafios');
const divCards = document.getElementById('secao-desafios');

var cardAtual;
var novoCard;

const cardId = window.location.href.split("?id=")[1]; //id do card

window.addEventListener('load', function dados(){

    fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(usuario => {
                nomeMenu.innerText = usuario.name.split(' ')[0]; //primeiro nome

                nome.innerText = usuario.name;
                descricao.innerText = usuario.company.catchPhrase;

                linkedin.href = usuario.linkedin
                github.href = usuario.github
                behance.href = usuario.behance
                medium.href = usuario.medium

                interesse.innerText = usuario.website
                tecnologias.innerText = usuario.street
            })
})

window.addEventListener('load', function desafiosRealizados(){

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            .then(res => res.json())
            .then(json => {

                /* Numero de desafios */
                if(json.length == 0){
                    numDesafios.innerText = "Nenhum desafio finalizado"
                } else if (json.length == 1){
                    numDesafios.innerText = "1 Desafio Realizado"
                } else {
                    numDesafios.innerText = `${json.length} Desafios Realizados`
                }

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


                    cardAtual = divCards.innerHTML;

                    novoCard = `
                    <div id="card-desafio-realizado">
                        <div class="d-flex justify-content-between align-items-center" id="info-desafio">
                            <p class="font-4 m-0"> <strong>Desafio:</strong> ${desafio.title}</p>
                            <div class="stack ${corStack} font-4 d-flex justify-content-center align-items-center"> ${desafio.id} </div>
                        </div>
                        <div id="mais-infos">
                            <p class="font-4">
                                ${desafio.body}
                            </p>
                            <p class="font-4"> <strong>Tecnologias Utilizadas:</strong> 
                                ${desafio.id}</p>
                            <a href="#${desafio.id}">Confira o projeto completo</a>
                        </div>
                    </div> 
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html

                })
            })
})