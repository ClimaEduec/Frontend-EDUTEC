export async function verifyToken(url) {
    const token = localStorage.getItem("token")

    if(!token){
        window.location.href = url
        return
    }


    const response = await fetch("https://3000-climaedutec-edutecbacke-5bf85btxnqt.ws-us116.gitpod.io/verify", {
        headers:{
            "Authorization": token
        }
    }).then(response=>response.json())

    if(!response.ok){
        alert(response.message)
        window.location.href=url
    }
}