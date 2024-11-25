export async function getName(){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("https://3000-climaeduec-backendedute-igjilfarbj7.ws-us116.gitpod.io/getname",{
        headers: {
            "Authorization": token
        }
    }).then(response=>response.json())
    
    const nameP = document.querySelector(".user p")
    nameP.innerHTML = `OLÁ, ${response.name}`
}