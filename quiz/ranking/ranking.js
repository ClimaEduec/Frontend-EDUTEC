/*
async function getRank(){
    const first_name = document.getElementById(".1name")
    const first_time = document.getElementById(".1time")
    const first_points = document.getElementById(".1points")




    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("https://3000-climaedutec-edutecbacke-5bf85btxnqt.ws-us116.gitpod.io/getrank",{
        headers: {
            "Authorization": token
        }
    }).then(response=>response.json())

    const nameP = document.querySelector(".user p")
    nameP.innerHTML = `OLÁ, ${response.name}`
}
*/


async function carregarRanking() {
    try {
        
        const response = await fetch('https://climaedutecbackend.vercel.app/rank');
        if (!response.ok) throw new Error('Erro ao buscar o ranking');
        const ranking = await response.json();
        const tbody = document.querySelector('.leaderboard tbody');
        tbody.innerHTML = ''; 

        
        ranking.forEach((jogador, index) => {
            const tr = document.createElement('tr');
            const medalImg = index < 3 ? `/imgs/${["prime", "segun", "terce"][index]} 1.png` : '/imgs/burro 1.png';

            tr.innerHTML = `
                <td><img src="${medalImg}" alt="${index + 1}º" class="medal-icon"></td>
                <td>${jogador.userName}</td>
                <td>${formatarTempo(jogador.time)}</td>
                <td>${jogador.points}</td>
            `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar ranking:', error.message);
    }
}


function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const restoSegundos = (segundos % 60).toFixed(2).padStart(5, '0');
    return `${minutos}:${restoSegundos}`;
}

window.onload = carregarRanking;

