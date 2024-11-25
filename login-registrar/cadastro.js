async function register(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const passwordConfirmation = document.querySelector("#password-confirmation").value
    const date = document.querySelector("#date").value

    if(name == "" || email == "" || password == "" || passwordConfirmation =="" || date == "") {
        alert("Preencha todas as informações!")
        return
    }

    if(password !== passwordConfirmation){
        alert("As senhas não conferem. Digite as senhas novamente!")
        document.querySelector("#password").value = ""
        document.querySelector("#password-confirmation").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }


    const response = await fetch("https://climaedutecbackend.vercel.app/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json" //enviou o user prara o banco
        },
        body: JSON.stringify({user})
    }).then(response => response.json()) //depois de pegar a responsta do banco
    alert(response.message)

    if(response.userExists){
        window.location.reload()        //apaga tudo q o usuario esqueceu se o user ja exist
        return
    }
    window.location.href = "./login.html"
}



const button = document.querySelector("form button")
button.addEventListener("click", (event)=>{
    event.preventDefault()
    register()
})
