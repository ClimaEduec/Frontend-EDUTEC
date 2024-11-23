export async function getName(){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("https://3000-climaedutec-edutecbacke-5bf85btxnqt.ws-us116.gitpod.io/getname",{
        headers: {
            "Authorization": token
        }
    }).then(response=>response.json())
    
    const nameP = document.querySelector(".user p")
    nameP.innerHTML = `OLÁ, ${response.name}`
}