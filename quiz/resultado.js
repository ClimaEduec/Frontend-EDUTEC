

async function results(){
    const urlParams = new URLSearchParams(window.location.search)
    const score = urlParams.get('score')
    const time = urlParams.get('time')
    const token = localStorage.getItem("token")
    function calcularRanking(tempoGasto, respostasCertas) {
        return (respostasCertas * 10) + (tempoGasto <= 180 ? 30 : tempoGasto <= 240 ? 20 : 10);}
    const points = calcularRanking(time, score)

    if(!score || !time || !token || !points){
        alert("Ocorreu algum erro!")
        return
    }
    const match = {
        token,
        score,
        time,
        points
    }


    const response = await fetch("https://3000-climaeduec-backendedute-igjilfarbj7.ws-us116.gitpod.io/results",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({match})
    })
    //.then(response => response.json()) //depois de pegar a responsta do banco ----- preciso?
    //alert(response.message)
}

results()





