

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


    const response = await fetch("https://3000-climaedutec-edutecbacke-5bf85btxnqt.ws-us116.gitpod.io/results",{
        method: "POST",
        headers:{
            "Content-Type": "application/json", //enviou o match prara o banco
            "Authorization": token
        },
        body: JSON.stringify({match})
    })
    alert("passou por  td fiot")
    //.then(response => response.json()) //depois de pegar a responsta do banco ----- preciso?
    //alert(response.message)
}

results()

/*
    if(name == "" || email == "" || password == "" || passwordConfirmation =="" || date == "") {
        alert("Preencha todas as informações!")
        return
    }*/





/*function mostrarResultado() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <section>
            <h2>Resultado Final</h2>
            <p>Você acertou ${respostasCorretas} de ${quizData.quizzes[0].questions.length} perguntas.</p>
            <button id="reiniciar">Reiniciar Quiz</button>
            <button id="voltar">iívio</button>
        </section>
    `;

    document.getElementById('reiniciar').addEventListener('click', () => {
        perguntaAtual = 0;
        respostasCorretas = 0;
        questionsAnswered.value = 0; // Reinicia o número de perguntas respondidas
        carregarPergunta();
    });

    document.getElementById('voltar').addEventListener('click', openDialog);
}*/




