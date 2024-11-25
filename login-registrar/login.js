async function login(){
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    if(email == "" || password == ""){
        alert("Preencha todos os campos!")
        return
    }
    const user ={
        email,
        password
    }

    const response = await fetch("https://3000-climaeduec-backendedute-igjilfarbj7.ws-us116.gitpod.io/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json()) // precisa do () pq sim e pq é uma resposta, vc ta chamndo a funcção, burro

    if(response.ok){
        console.log(response.token)
        localStorage.setItem("token",response.token)
        window.location.href="../index.html"
        return
    }

    alert(response.message)
    window.location.reload()
}

const button = document.querySelector("form button")
button.addEventListener("click", (event)=>{
    event.preventDefault()
    login()
})