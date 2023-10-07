const URL = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lista_premios%22%5D%7B%0A++titulo%2C%0A++++descricao%2C%0A++++%27imagem%27%3A+imagem.asset+-%3E+url%0A%7D"

async function lista_premios(){
    var dados = await fetch(URL, {
        method: "GET"
    })

    var dadosJS = await dados.json()
    dadosJS.result.forEach(element => {

        var div = document.createElement("div")
        div.className = "premios"

        var titulo = document.createElement("h3")

        var paragrafo = document.createElement("p")

        var imagem = document.createElement("img")
        imagem.setAttribute("src",element.imagem)

        var div_premios = document.querySelector(".div-premios")
        
        titulo.innerText = element.titulo;
        paragrafo.innerText = element.descricao;
        imagem.src = element.imagem;
        
        div.appendChild(imagem)
        div.appendChild(titulo)
        div.appendChild(paragrafo)
        
        div_premios.appendChild(div)
    
    })
}

lista_premios()
