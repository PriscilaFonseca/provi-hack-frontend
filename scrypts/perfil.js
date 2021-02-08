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

const userId = window.location.href.split("?id=")[1]; //id do card

window.addEventListener('load', function dados(){

    fetch(`http://127.0.0.1:8000/api/user/${userId}`)
            .then(res => res.json())
            .then(json => {
                    nomeMenu.innerText = json.user.name.split(' ')[0]; //primeiro nome

                    nome.innerText = json.user.name;
                    descricao.innerText = json.user.profile.bio;

                    json.user.profile.linkedin =! '' ? linkedin.href = `${json.user.profile.linkedin}` : linkedin.target = ''
                    json.user.profile.github =! '' ? linkedin.href = `${json.user.profile.github}` : linkedin.target = ''
                    json.user.profile.behance =! '' ? linkedin.href = `${json.user.profile.behance}` : linkedin.target = ''
                    json.user.profile.medium =! '' ? linkedin.href = `${json.user.profile.medium}` : linkedin.target = ''

                    interesse.innerText = json.user.profile.main_technology
                    tecnologias.innerText = json.user.profile.stacks
            })
})

window.addEventListener('load', function desafiosRealizados(){

    fetch(`http://127.0.0.1:8000/api/challenge-completed/${userId}`, {
        method: 'GET',   
            headers: {
                'Authorization': `${localStorage.getItem("AUTHENTICATED_TOKEN")}`,
                'X-Requested-With': 'XMLHttpRequest' 
            }
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)

                /* Numero de desafios */
                if(json['challenges-completed'].length == 0){
                    numDesafios.innerText = "Nenhum desafio finalizado"
                } else if (json['challenges-completed'].length == 1){
                    numDesafios.innerText = "1 Desafio Realizado"
                } else {
                    numDesafios.innerText = `${json['challenges-completed'].length} Desafios Realizados`
                }

                json['challenges-completed'].forEach(desafio => {

                    console.log(desafio)

                    switch(desafio.used_techs) {
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
                            <div class="stack ${corStack} font-4 d-flex justify-content-center align-items-center"> ${desafio.used_techs.toUpperCase()} </div>
                        </div>
                        <div id="mais-infos">
                            <p class="font-4">
                                ${desafio.description}
                            </p>
                            <p class="font-4"> <strong>Tecnologias Utilizadas:</strong> 
                                ${desafio.id}</p>
                            <a href="${desafio.link}" target="_blank">Confira o projeto completo</a>
                        </div>
                    </div> 
                    `
                    cardAtual = novoCard + cardAtual; //concatena resultados

                    divCards.innerHTML = cardAtual; //insere no html

                })
            })
})