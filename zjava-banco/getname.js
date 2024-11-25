export async function getName(){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("https://climaedutecbackend.vercel.app/getname",{
        headers: {
            "Authorization": token
        }
    }).then(response=>response.json())
    
    const nameP = document.querySelector(".user p")
    nameP.innerHTML = `OLÁ, ${response.name}`
}