const stack = document.getElementById('stack-desafio')
const titulo = document.getElementById('titulo-desafio');
const descricao = document.getElementById('descricao-desafio')
const cardId = window.location.href.split("?id=")[1]; //id do card

const linkLogin = document.getElementById('redirect');
const btnDiv = document.getElementById('btn');

console.log(cardId)

window.addEventListener('load', function desafio(){

    fetch(`http://127.0.0.1:8000/api/challenge/${cardId}`)
            .then(res => res.json())
            .then(desafio => {
                    console.log(desafio)
                    stack.innerText = desafio.challenge.id_area_expertise.toUpperCase();
                    titulo.innerText = desafio.challenge.title;
                    descricao.innerText = desafio.challenge.description; 
            })
})

if(localStorage.getItem("AUTHENTICATED_TOKEN") !== ""){
        btnDiv.innerHTML= `<button class="font-4" id="btn-desafios" OnClick="modal()">Enviar seu Desafio</button>`;
        linkLogin.parentNode.removeChild(linkLogin);
        
}