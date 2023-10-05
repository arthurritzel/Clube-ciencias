const URL_duvidas = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27duvidas%27%5D%7B%0A++Pergunta%2C%0A++resposta%2C%0A%7D"

async function duvidas(){
    var dados = await fetch(URL_duvidas, {
        method: "GET"
    })

    var dadosJS = await dados.json();
    var cont = 0;
    dadosJS.result.forEach(element =>{
        var p = document.createElement("p")
        var botao = document.createElement("button")
        botao.className = "campo-freq"
        botao.setAttribute("type", "button")
        botao.setAttribute("data-bs-toggle", "collapse")
        botao.setAttribute("data-bs-target", `#collapseExample${cont}`)
        botao.setAttribute("aria-expanded", "false")
        botao.setAttribute("aria-controls", "collapseExample")

        botao.innerText = element.Pergunta

        var collapse = document.createElement("div")
        collapse.className = "collapse"
        collapse.id = `collapseExample${cont}`

        var cardBody = document.createElement("div")
        cardBody.className = "card card-body"

        cardBody.innerText = element.resposta

        collapse.appendChild(cardBody)
        p.appendChild(botao)

        var frequente = document.querySelector(".frequente")
        frequente.appendChild(p)
        frequente.appendChild(collapse)
        cont++

    })
}
duvidas();
