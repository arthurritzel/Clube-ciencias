const URL_surgiu = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27como_surgiu%27+%5D%7B%0A++descricao%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D"

async function como_surgiu(){
    var dados = await fetch(URL_surgiu, {
        method: "GET"
    })

    var dadosJS = await dados.json();

    var p = document.createElement("p")
    p.className = "comosurgiu-txt"
    p.innerText = dadosJS.result[0].descricao

    var img = document.createElement("img")
    img.className = "comosurgiu-img"
    img.setAttribute("src", `${dadosJS.result[0].imagem}?w=500&h=600`)

    var conteudo = document.querySelector(".conteudo")
    conteudo.appendChild(p)
    conteudo.appendChild(img)
}

como_surgiu()