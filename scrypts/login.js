const loginBtn = document.getElementById('btn-login');
const aviso = document.getElementById('aviso');

const loginEmail = document.getElementById('email');
const LoginSenha = document.getElementById('senha');

loginBtn.addEventListener('click', () => {
    const requestBody = { email: loginEmail.value, 
						  senha: LoginSenha.value}

     let body = JSON.stringify(requestBody);

    fetch('http://127.0.0.1:8000/api/user/authenticate', {
            method: 'POST',   
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":"Lari@user.com","password":"123456@"}),
    })
        .then(res => res.json())
        .then(json => { 

            console.log(json)

            if(json.hasOwnProperty("message") && json.message[0] == "Invalid credentials."){
                aviso.innerText = "Email ou senha incorretos"
            } else {
                console.log(json.token)
                console.log(json.user.id)

                localStorage.setItem("AUTHENTICATED_TOKEN", `Bearer ${json.token}`)
                localStorage.setItem("USER_ID", json.user.id)

                window.location.href = `http://127.0.0.1:5500/perfil.html?id=${json.user.id}`;
            }
        })
        
})


/* {"email": "user@user.com",
"password": "@user"} */

/*{ "email":"e@e43.com",
"password":"123456@"} */